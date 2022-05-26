export default {
  data: () => ({
    dialogCroppieDataImg: '',
    dialogCroppie: false,
    dialogCroppieOptions: { title: '', size: { w: 0, h: 0 }, enableResize: { x: false, y: false } }
  }),
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
        this.form[name + 'Croppie'] = e[0]
        this.form[name + 'Blob'] = e[1]
      }
      this.dialogCroppie = true
    },
    changeCroppie() {
    },
    beforeCropInsert(el) {
      this.dialogCroppieDataImg = el.content.imgName.original
      this.dialogCroppieOptions = {
        title: 'Изображение',
        size: { w: 800, h: 350 },
        enableResize: { w: true, h: true }
      }
      this.changeCroppie = (e) => {
        el.content.imgName.croppie = e[0]
        el.content.imgName.blob = e[1]
      }
      this.dialogCroppie = true
    }
  }
}