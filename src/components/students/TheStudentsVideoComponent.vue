<template>
  <div class="anim-container">
    <div class="anim-blue rounded-pill" />
    <div class="anim-pink rounded-pill" />
    <div class="anim-video">
      <iframe
        title="Как бесплатно поступить в ИТМО"
        src="https://vk.com/video_ext.php?oid=-189033559&id=456239037&hash=c2f77b600102cde5"
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      />
      <img
        alt="..."
        rel="preload"
        class="anim-video-preview"
        width="100%"
        height="100%"
        src="https://sun9-23.userapi.com/impf/90UKl8A03ksEX_WKQ7vHDo4c6jA3WMId3hLY5w/r1Jh-BendX8.jpg?size=800x450&quality=96&keep_aspect_ratio=1&background=000000&sign=4d2eabd5292f20d54d160c3354e3b78e&type=video_thumb"
      >
      <div class="anim-video-btn justify-center align-center">
        <button @click="playVideo">
          ▶
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStudentsVideoComponent',
  methods: {
    playVideo() {
      document.querySelector('.anim-video-preview').classList.add('d-none')
      document.querySelector('.anim-video-btn').classList.add('d-none')
      document.querySelector('.anim-video iframe').src += '&autoplay=1'
    }
  }
}
</script>

<style scoped lang="scss">
.anim-container {
  width: 300px;
  height: 195px;
  position: relative;

  div {
    position: absolute;
  }

  @media (min-width: 600px) {
    width: 565px;
    height: 368px;
  }
  @media (min-width: 960px) {
    width: 380px;
    height: 247px;
  }
  @media (min-width: 1110px) {
    width: 420px;
    height: 273px;
  }
  @media (min-width: 1264px) {
    width: 505px;
    height: 328px;
  }
  @media (min-width: 1514px) {
    width: 565px;
    height: 368px;
  }
  @media (min-width: 1904px) {
    width: 760px;
    height: 494px;
  }
  @media (min-width: 2204px) {
    width: 860px;
    height: 559px;
  }
}

.anim-blue {
  top: 0;
  left: 0;
  width: 90.4%;
  height: 31%;
  background-color: #00A1FF;
}

.anim-pink {
  bottom: 0;
  right: 0;
  width: 90.4%;
  height: 31%;
  background-color: #FF0281;
}

.anim-video {
  top: 8.7%;
  left: 7%;
  width: 79.4%;
  height: 82.6%;
}

.anim-video-btn {
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.anim-video-btn button {
  color: #2DC0C5;
  font-size: 40px;
  height: 100px;
  width: 100px;
  border: 3px solid #FFFFFF;
  border-radius: 50%;
  position: relative;
  transition: all .5s;
  @media (max-width: 1264px) {
    font-size: 25px;
    height: 50px;
    width: 50px;
  }
  @media (max-width: 600px) {
    border: 2.5px solid #FFFFFF;
  }

  &:hover {
    background: white;
  }
}

.anim-video-btn button:after {
  content: "";
  display: block;
  position: absolute;
  top: -13px;
  left: -13px;
  height: 120px;
  width: 120px;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  @media (max-width: 1264px) {
    top: -8px;
    left: -8px;
    height: 60px;
    width: 60px;
  }
  @media (max-width: 600px) {
    top: -7.5px;
    left: -7.5px;
    border: 1.5px solid #FFFFFF;
  }
}

.anim-video-btn button:before {
  content: "";
  display: block;
  position: absolute;
  top: -22px;
  left: -22px;
  height: 140px;
  width: 140px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  @media (max-width: 1264px) {
    top: -13px;
    left: -13px;
    height: 70px;
    width: 70px;
  }
  @media (max-width: 600px) {
    border: 1px solid #FFFFFF;
  }
}

.anim-video-preview {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>