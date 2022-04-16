export default {
  data: () => ({
    dialog: false,
    dialogContent: {},
    count: 1,
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
    }
  }
}