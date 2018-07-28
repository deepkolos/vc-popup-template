<style scoped>
  .{{ name }} {

  }
</style>

<template>
  <div class="{{ name }}">
    
  </div>
</template>

<script>
  export default {
    props: {
      e: {
        default: null           // 从open(e, config)传进来的e
      }
    },

    created () {
      this.popupEvt = {         // 执行顺序如下
        beforeMount:  () => {}, // 在appenChild前执行
        afterMount:   () => {}, // 在appenChild后执行, 定位需要使用到getBoundingClientRect的话就挂在这里
        beforeEnter:  () => {}, // 相当于afterMount的别名, 用于设置进入是动画
        afterEnter:   () => {}, // 进入动画结束时执行
        beforeLeave:  () => {}, // 触发离开事件时执行
        afterLeave:   () => {}, // 离开动画结束时执行

        inAnimation:  () => {}, // beforeEnter的别名, 不过默认提供了于animation配置的互斥
        outAnimation: () => {}, // beforeLeave的别名, 不过默认提供了于animation配置的互斥

        /* inAnimation等效于, outAnimation同理
        beforeEnter (animationConfiged) {
          if (animationConfiged) return

          // animation operation
        }*/

        // 如果需要定制过渡动画, 则在defaultConfig.animationConfigurable = false
        // 然后定制过渡动画则放在beforeEnter/beforeLeave里面
      }

      // 可以通过$popupCtrl, 来获取父级节点的引用和操作
      this.$popupCtrl = {
        config,         // defaultConfig, constructConfig(new时候), runtimeConfig(open时候)所合并出来的config
        vmBase,         // vc-popup-base的vm引用
        vmSlot,         // vc-popup-slot的vm引用
        close(),        // 关闭popup
        getRouterId(),  // 获取hash的id, 注意仅仅当前popup打开的时候, 获取的生效的, 需要关闭后/嵌套时, 注意缓存
        parseRefCorner(String),       // 纯函数, 提供refCorner的参数解析
        parseRelativeToCorner(String) // 纯函数, 提供relativeToCorner的参数解析
      }
    }
  }
</script>