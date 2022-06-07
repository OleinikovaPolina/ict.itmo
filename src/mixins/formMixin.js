export default {
  data: () => ({
    dialog: false,
    dialogContent: {},
    count: 1
  }),
  methods: {
    changeDialog(val) {
      this.dialog = val
    },
    changeDialogContent(val) {
      this.dialogContent = val
    },
    addBlock() {
      this.form.blocks.push({ id: this.count, type: -1, content: null })
      this.count++
    },
    deleteBlock(i) {
      this.form.blocks = this.form.blocks.filter(x => x.id !== i)
    },
    updateBlock() {
      this.form.blocks = this.form.blocks.map(x => this.forUpdateBlock(x))
    },
    forUpdateBlock(v) {
      if (v.type === 1) {
        return {
          type: 1,
          id: v.id,
          content: { blocks: [this.forUpdateBlock(v.content.blocks[0]), this.forUpdateBlock(v.content.blocks[1])] }
        }
      } else {
        let copyV = Object.assign({}, v)
        return copyV
      }
    },
    async publishBlocks(blocks) {
      for (let block of blocks) {
        if (block.type === 1) {
          for (const blockElement of block.content.blocks) {
            if (blockElement.type === 2 && blockElement.content.imgName.blob) {
              await this.addAttachment(blockElement.content.imgName.blob).then(res => {
                blockElement.content.imgName.croppie = res.data.url
              }).catch(() => ({}))
            }
            if (blockElement.type === 3) {
              for (let blockImage of blockElement.content.imagesName) {
                if (blockImage['blob']) {
                  await this.addAttachment(blockImage['blob']).then(res => {
                    blockImage.croppie = res.data.url
                  }).catch(() => ({}))
                }
                delete blockImage.original
                delete blockImage['blob']
              }
              delete blockElement.content.images
            }
            delete blockElement.id
            if (blockElement.type === 2) {
              delete blockElement.content.img
              delete blockElement.content.imgName.original
              delete blockElement.content.imgName.blob
            }
          }
        }
        if (block.type === 2 && block.content.imgName.blob) {
          await this.addAttachment(block.content.imgName.blob).then(res => {
            block.content.imgName.croppie = res.data.url
          }).catch(() => ({}))
        }
        if (block.type === 3) {
          for (let blockImage of block.content.imagesName) {
            if (blockImage['blob']) {
              await this.addAttachment(blockImage['blob']).then(res => {
                blockImage.croppie = res.data.url
              }).catch(() => ({}))
            }
            delete blockImage.original
            delete blockImage['blob']
          }
          delete block.content.images
        }
        delete block.id
        if (block.type === 2) {
          delete block.content.img
          delete block.content.imgName.original
          delete block.content.imgName.blob
        }
      }
      return blocks
    },
    dataToFormBlocks(blocks) {
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].id = i
        if (blocks[i].type === 0) {
          blocks[i].content.text = blocks[i].content.text.replace('<div>', '').replace('</div>', '')
          const parser = new DOMParser()
          blocks[i].content.text = parser.parseFromString(blocks[i].content.text, 'text/html').body.innerHTML
          blocks[i].content.text = blocks[i].content.text.replace(/\r/g, '').replace(/\n/g, '')
        }
        if (blocks[i].type === 1) {
          blocks[i].content.blocks[0].id = (i + 1) * 1000 + 1
          blocks[i].content.blocks[1].id = (i + 1) * 1000 + 2
          for (let argument of blocks[i].content.blocks) {
            if (argument.type === 2) {
              argument.content.img = null
              argument.content.imgName.blob = null
              argument.content.imgName.original = argument.content.imgName.croppie
            }
            if (argument.type === 3) {
              argument.content.images = []
              let c = 1
              for (let argument2 of argument.content.imagesName) {
                argument.content.images.push({ name: c + ' img' })
                c += 1
                argument2.original = argument2.croppie
                argument2.blob = null
              }
            }
          }
        }
        if (blocks[i].type === 2) {
          blocks[i].content.img = null
          blocks[i].content.imgName.blob = null
          blocks[i].content.imgName.original = blocks[i].content.imgName.croppie
        }
        if (blocks[i].type === 3) {
          blocks[i].content.images = []
          let c = 1
          for (let argument of blocks[i].content.imagesName) {
            blocks[i].content.images.push({ name: c + ' img', id: c })
            c += 1
            argument.original = argument.croppie
            argument.blob = null
          }
        }
      }
      return blocks
    }
  }
}