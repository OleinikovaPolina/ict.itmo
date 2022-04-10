export default {
  data: function() {
    return {
      dialogCroppieDataImg: '',
      dialogCroppie: false,
      dialogCroppieOptions: { title: '', size: { w: 0, h: 0 }, enableResize: { x: false, y: false } }
    }
  },
  methods: {
    changeDialogCroppie(val) {
      this.dialogCroppie = val
    },
    beforeCrop(name, size, title, e) {
      this.form[name] = e
      let reader = new FileReader()
      reader.onload = (e) => {
        this.dialogCroppieDataImg = e.target.result
      }
      reader.readAsDataURL(e)
      this.dialogCroppieOptions = {
        title: title,
        size: size,
        enableResize: { w: false, h: false }
      }
      this.changeCroppie = (e) => {
        this.form[name + 'Croppie'] = e
      }
      this.dialogCroppie = true
    },
    changeCroppie() {
    },
    beforeCropInsert(el) {
      this.dialogCroppieDataImg = el.content.imgName.original
      this.dialogCroppieOptions = {
        title: 'Изображение',
        size: { w: 1140, h: 400 },
        enableResize: { w: true, h: true }
      }
      this.changeCroppie = (e) => {
        el.content.imgName.croppie = e
      }
      this.dialogCroppie = true
    }
  }
}