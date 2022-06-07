export default {
  data: () => ({
    dialogCroppieMultipleEdit: false,
    dialogCroppieMultipleDataImg: null,
    dialogCroppieMultiple: false
  }),
  methods: {
    changeDialogCroppieMultiple(val) {
      this.dialogCroppieMultiple = val
    },
    async beforeCropMultiple(name, title, e) {
      let newValues = []
      for (let i = 0; i < e.length; i++) {
        let val = e[i]
        await this.onloadReader(val).then(async (v) => {
          newValues.push({ original: v.target.result, croppie: v.target.result, blob: null })
        })
      }
      this.dialogCroppieMultipleDataImg = newValues
      this.form[name] = this.form[name].concat(e)

      this.dialogCroppieMultipleEdit = false
      this.changeCroppieMultiple = (e) => {
        e.forEach((x, i) => {
          newValues[i].croppie = x[0]
          newValues[i].blob = x[1]
        })
        this.form[name + 'ImagesNames'] = this.form[name + 'ImagesNames'].concat(newValues)
      }
      this.dialogCroppieMultiple = true
    },
    async beforeCropMultipleOne(name, i) {
      let newValues = [this.form[name + 'ImagesNames'][i]]
      this.dialogCroppieMultipleDataImg = newValues
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
          newValues.push({ original: v.target.result, croppie: v.target.result, blob: null })
        })
      }
      this.dialogCroppieMultipleDataImg = newValues
      el.content.images = el.content.images.concat(e)

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
      this.dialogCroppieMultipleDataImg = newValues

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