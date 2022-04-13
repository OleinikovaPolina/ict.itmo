export default {
  data: () => ({
    heightImg: 0,
    dialogCroppieMultipleDataImg: null,
    dialogCroppieMultiple: false,
    dialogCroppieMultipleOptions: { title: '', size: { w: 0, h: 0 }, enableResize: { x: false, y: false } }
  }),
  methods: {
    getHeight(e) {
      if (e) {
        let img = new Image()
        img.onload = () => {
          this.heightImg = img.height
        }
        img.src = e
      }
    },
    changeDialogCroppieMultiple(val) {
      this.dialogCroppieMultiple = val
    },
    beforeCropMultiple(name, title, e) {
      let newValues = []
      e.forEach((val, i) => {
        let reader = new FileReader()
        reader.onload = (val) => {
          if (i === 0) {
            if (this.form[name + 'ImagesNames'].length === 0) {
              this.getHeight(val.target.result)
            } else {
              let o = Object.assign({}, this.form[name + 'ImagesNames'][0])
              this.getHeight(o.original)
            }
          }
          newValues.push({ original: val.target.result, croppie: val.target.result, blob: null })
        }
        reader.readAsDataURL(val)
      })
      this.dialogCroppieMultipleDataImg = newValues
      this.form[name] = this.form[name].concat(e)

      this.dialogCroppieMultipleOptions = {
        title: title,
        size: { w: 1140, h: 400 },
        enableResize: { w: true, h: false }
      }
      this.changeCroppieMultiple = (e) => {
        e.forEach((x, i) => {
          newValues[i].croppie = x[0]
          newValues[i].blob = x[1]
        })
        this.form[name + 'ImagesNames'] = this.form[name + 'ImagesNames'].concat(newValues)
      }
      this.dialogCroppieMultiple = true
    },
    beforeCropMultipleOne(name, i,title) {
      let newValues = [this.form[name + 'ImagesNames'][i]]
      this.dialogCroppieMultipleDataImg = newValues
      this.dialogCroppieMultipleOptions = {
        title: title,
        size: { w: 1140, h: 400 },
        enableResize: { w: true, h: false }
      }
      this.changeCroppieMultiple = (e) => {
        newValues[0].croppie = e[0][0]
        newValues[0].blob = e[0][1]
        this.form[name + 'ImagesNames'][i] = newValues[0]
      }
      this.dialogCroppieMultiple = true
    },
    changeCroppieMultiple() {
    },
    beforeCropMultipleInsert(el, e) {
      let newValues = []
      e.forEach((val, i) => {
        let reader = new FileReader()
        reader.onload = (e) => {
          if (i === 0) {
            if (el.content.imagesName.length === 0) {
              this.getHeight(e.target.result)
            } else {
              let o = Object.assign({}, el.content.imagesName[0])
              this.getHeight(o.original)
            }
          }
          newValues.push({ original: e.target.result, croppie: e.target.result, blob: null })
        }
        reader.readAsDataURL(val)
      })
      this.dialogCroppieMultipleDataImg = newValues
      el.content.images = el.content.images.concat(e)

      this.dialogCroppieMultipleOptions = {
        title: 'Слайдер',
        size: { w: 1140, h: 400 },
        enableResize: { w: true, h: false }
      }
      this.changeCroppieMultiple = (e) => {
        e.forEach((x, i) => {
          newValues[i].croppie = x[0]
          newValues[i].blob = x[1]
        })
        el.content.imagesName = el.content.imagesName.concat(newValues)
      }
      this.dialogCroppieMultiple = true
    },
    beforeCropMultipleInsertOne(el, i) {
      let newValues = [el.content.imagesName[i]]
      this.dialogCroppieMultipleDataImg = newValues

      this.dialogCroppieMultipleOptions = {
        title: 'Слайдер',
        size: { w: 1140, h: 400 },
        enableResize: { w: true, h: false }
      }
      this.changeCroppieMultiple = (e) => {
        newValues[0].croppie = e[0][0]
        newValues[0].blob = e[0][1]
        el.content.imagesName[i] = newValues[0]
      }
      this.dialogCroppieMultiple = true
    }
  }
}