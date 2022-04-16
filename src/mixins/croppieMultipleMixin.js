export default {
  data: () => ({
    heightImg: 0,
    dialogCroppieMultipleEdit: false,
    dialogCroppieMultipleDataImg: null,
    dialogCroppieMultiple: false,
    dialogCroppieMultipleOptions: { title: '', size: { w: 0, h: 0 }, enableResize: { x: false, y: false } }
  }),
  methods: {
    getHeight(e) {
      if (e) {
        return new Promise((resolve, reject) => {
          let img = new Image()
          img.onload = () => resolve(img.height)
          img.onerror = reject
          img.src = e
        })
      }
    },
    changeDialogCroppieMultiple(val) {
      this.dialogCroppieMultiple = val
    },
    async beforeCropMultiple(name, title, e) {
      let newValues = []
      for (let i = 0; i < e.length; i++) {
        let val = e[i]
        await this.onloadReader(val).then(async (v) => {
          if (i === 0) {
            if (this.form[name + 'ImagesNames'].length === 0) {
              await this.getHeight(v.target.result).then((h) => {
                this.heightImg = h
              })
            } else {
              let o = Object.assign({}, this.form[name + 'ImagesNames'][0])
              await this.getHeight(o.original).then((h) => {
                this.heightImg = h
              })
            }
          }
          newValues.push({ original: v.target.result, croppie: v.target.result, blob: null })
        })
      }
      this.dialogCroppieMultipleDataImg = newValues
      this.form[name] = this.form[name].concat(e)

      this.dialogCroppieMultipleOptions = {
        title: title,
        size: { w: 1140 },
        enableResize: { w: true, h: false }
      }
      this.dialogCroppieMultipleEdit = false
      this.changeCroppieMultiple = (e) => {
        e.forEach((x, i) => {
          newValues[i].croppie = x[0]
          newValues[i].blob = x[1]
        })
        this.form[name + 'ImagesNames'] = this.form[name + 'ImagesNames'].concat(newValues)
        console.log(this.form)
      }
      this.dialogCroppieMultiple = true
    },
    async beforeCropMultipleOne(name, i, title) {
      let newValues = [this.form[name + 'ImagesNames'][i]]
      await this.getHeight(this.form[name + 'ImagesNames'][0].original).then((h) => {
        this.heightImg = h
      })
      this.dialogCroppieMultipleDataImg = newValues
      this.dialogCroppieMultipleOptions = {
        title: title,
        size: { w: 1140 },
        enableResize: { w: true, h: false }
      }
      this.dialogCroppieMultipleEdit = true
      this.changeCroppieMultiple = (e) => {
        newValues[0].croppie = e[0][0]
        newValues[0].blob = e[0][1]
        this.form[name + 'ImagesNames'][i] = newValues[0]
      }
      this.dialogCroppieMultiple = true
    },
    changeCroppieMultiple() {
    },
    onloadReader(val) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = (e) => resolve(e)
        reader.onerror = reject
        reader.readAsDataURL(val)
      })
    },
    async beforeCropMultipleInsert(el, e) {
      let newValues = []
      for (let i = 0; i < e.length; i++) {
        let val = e[i]
        await this.onloadReader(val).then(async (v) => {
          if (i === 0) {
            if (el.content.imagesName.length === 0) {
              await this.getHeight(v.target.result).then(h => {
                this.heightImg = h
              })
            } else {
              let o = Object.assign({}, el.content.imagesName[0])
              await this.getHeight(o.original).then(h => {
                this.heightImg = h
              })
            }
          }
          newValues.push({ original: v.target.result, croppie: v.target.result, blob: null })
        })
      }
      this.dialogCroppieMultipleDataImg = newValues
      el.content.images = el.content.images.concat(e)

      this.dialogCroppieMultipleOptions = {
        title: 'Слайдер',
        size: { w: 1140 },
        enableResize: { w: true, h: false }
      }
      this.dialogCroppieMultipleEdit = false
      this.changeCroppieMultiple = (e) => {
        e.forEach((x, i) => {
          newValues[i].croppie = x[0]
          newValues[i].blob = x[1]
        })
        el.content.imagesName = el.content.imagesName.concat(newValues)
      }
      this.dialogCroppieMultiple = true
    },
    async beforeCropMultipleInsertOne(el, i) {
      let newValues = [el.content.imagesName[i]]
      await this.getHeight(el.content.imagesName[0].original).then((h) => {
        this.heightImg = h
      })
      this.dialogCroppieMultipleDataImg = newValues

      this.dialogCroppieMultipleOptions = {
        title: 'Слайдер',
        size: { w: 1140 },
        enableResize: { w: true, h: false }
      }
      this.dialogCroppieMultipleEdit = true
      this.changeCroppieMultiple = (e) => {
        newValues[0].croppie = e[0][0]
        newValues[0].blob = e[0][1]
        el.content.imagesName[i] = newValues[0]
      }
      this.dialogCroppieMultiple = true
    }
  }
}