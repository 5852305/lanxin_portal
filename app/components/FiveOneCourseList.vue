<template>
  <div class="physiological-health-container h-full w-full pt-5 pr-4 pl-4 bg-#EFE9E3">
    <!--生理健康-->
    <MainSubTitle :main-title-class="mainTitleClass" :sub-title-class="subTitleClass" :main-title="mainTitle" :sub-title="subTitle"/>
    <div class="course-list mt-8 grid grid-cols-2 gap-4">
      <img v-for="(item,index) in courseList" :src="item.src" :alt="item.alt" :key="index" @click="toPage(item.to)">
    </div>
  </div>
</template>

<script setup lang="ts">
const { $message } = useNuxtApp();
import { useMessage } from '~/composables/useMessage';
const message = useMessage();
const router = useRouter()
const props = withDefaults(defineProps<{
  mainTitle?: string
  subTitle?: string
  mainTitleClass?: string
  subTitleClass?: string
  courseList?: any[]
}>(), {
  mainTitle: "主要标题",
  subTitle: "副标题rand Introduction of Lanxi",
  mainTitleClass: "text-[#510504] text-[30px]",
  subTitleClass: "text-[12px] text-[#C7BFBF]",
  courseList: () => {return []},
})

const toPage = (to: string) => {
  // console.log(message,$message,"==============")
  //   message.info('This  is a111n info message');
  // $message.info('This  is an info message');
  // const { getMessages } = useMessage();
  // console.log('Messages:',  getMessages());
  // if (!to){
  //   message.info('This  is an info message');
  // }
  if (to){
    router.push(to)
  }
}
</script>

<style scoped>

</style>