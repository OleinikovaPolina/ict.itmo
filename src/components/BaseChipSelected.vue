<template>
  <div
    :class="'ict-chip-'+item.type"
  >
    <v-chip
      class="rounded ict-chip"
    >
      {{ item.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'BaseChipSelected',
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss">
html body .v-application {
  .v-chip {
    color: rgba(0, 0, 0, 0);
    margin: 2.5px 0;
    padding: 0 10px;
    font-size: 14px;
    line-height: 19px;
    @media (max-width: 600px) {
      font-size: 12px;
      line-height: 17px;
    }
  }

  .v-chip:hover {
    padding: 2.5px 10px;
    margin: 0;
  }

  .v-chip:not(.v-chip--active) {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .v-chip.v-size--default {
    height: fit-content;
  }
}

.theme-light {
  .v-chip:not(.v-chip--active) .v-chip__content {
    color: #0071B2 !important;
  }
  .v-chip--active .v-chip__content {
    color: white;
  }
}

.theme-dark {
  .v-chip:not(.v-chip--active) .v-chip__content {
    color: white !important;
  }

  .v-chip--active .v-chip__content {
    color: #070C2D;
  }
}

@mixin content($color-default) {
  .v-chip:not(.v-chip--active) {
    border: 1px solid $color-default !important;
  }

  .v-chip--active {
    background-color: $color-default !important;
  }
}

.ict-chip-0 {
  @include content(#00A1FF);
}

.ict-chip-1 {
  @include content(#FF776E);
}

.ict-chip-2 {
  @include content(#6A30F4);
}

.ict-chip-3 {
  @include content(#00DEA9);
}
</style>