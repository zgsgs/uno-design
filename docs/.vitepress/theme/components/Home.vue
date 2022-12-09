<script lang="ts" setup>
import { bottomList, contributors } from '../src'
</script>

<template>
  <div id="banner">
    <div class="logo_box">
      <svg xmlns="http://www.w3.org/2000/svg" width="0.94em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 480 512" style="display: flex;justify-content: flex-end;color: rgb(34 16 197 / 28%);">
        <path fill="currentColor" d="M313.2 47.5c1.2-13 21.3-14 36.6-8.7c.9.3 26.2 9.7 19 15.2c-27.9-7.4-56.4 18.2-55.6-6.5zm-201 6.9c30.7-8.1 62 20 61.1-7.1c-1.3-14.2-23.4-15.3-40.2-9.6c-1 .3-28.7 10.5-20.9 16.7zM319.4 160c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16zm-159.7 0c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16zm318.5 163.2c-9.9 24-40.7 11-63.9-1.2c-13.5 69.1-58.1 111.4-126.3 124.2c.3.9-2-.1 24 1c33.6 1.4 63.8-3.1 97.4-8c-19.8-13.8-11.4-37.1-9.8-38.1c1.4-.9 14.7 1.7 21.6 11.5c8.6-12.5 28.4-14.8 30.2-13.6c1.6 1.1 6.6 20.9-6.9 34.6c4.7-.9 8.2-1.6 9.8-2.1c2.6-.8 17.7 11.3 3.1 13.3c-14.3 2.3-22.6 5.1-47.1 10.8c-45.9 10.7-85.9 11.8-117.7 12.8l1 11.6c3.8 18.1-23.4 24.3-27.6 6.2c.8 17.9-27.1 21.8-28.4-1l-.5 5.3c-.7 18.4-28.4 17.9-28.3-.6c-7.5 13.5-28.1 6.8-26.4-8.5l1.2-12.4c-36.7.9-59.7 3.1-61.8 3.1c-20.9 0-20.9-31.6 0-31.6c2.4 0 27.7 1.3 63.2 2.8c-61.1-15.5-103.7-55-114.9-118.2c-25 12.8-57.5 26.8-68.2.8c-10.5-25.4 21.5-42.6 66.8-73.4c.7-6.6 1.6-13.3 2.7-19.8c-14.4-19.6-11.6-36.3-16.1-60.4c-16.8 2.4-23.2-9.1-23.6-23.1c.3-7.3 2.1-14.9 2.4-15.4c1.1-1.8 10.1-2 12.7-2.6c6-31.7 50.6-33.2 90.9-34.5c19.7-21.8 45.2-41.5 80.9-48.3C203.3 29 215.2 8.5 216.2 8c1.7-.8 21.2 4.3 26.3 23.2c5.2-8.8 18.3-11.4 19.6-10.7c1.1.6 6.4 15-4.9 25.9c40.3 3.5 72.2 24.7 96 50.7c36.1 1.5 71.8 5.9 77.1 34c2.7.6 11.6.8 12.7 2.6c.3.5 2.1 8.1 2.4 15.4c-.5 13.9-6.8 25.4-23.6 23.1c-3.2 17.3-2.7 32.9-8.7 47.7c2.4 11.7 4 23.8 4.8 36.4c37 25.4 70.3 42.5 60.3 66.9zM207.4 159.9c.9-44-37.9-42.2-78.6-40.3c-21.7 1-38.9 1.9-45.5 13.9c-11.4 20.9 5.9 92.9 23.2 101.2c9.8 4.7 73.4 7.9 86.3-7.1c8.2-9.4 15-49.4 14.6-67.7zm52 58.3c-4.3-12.4-6-30.1-15.3-32.7c-2-.5-9-.5-11 0c-10 2.8-10.8 22.1-17 37.2c15.4 0 19.3 9.7 23.7 9.7c4.3 0 6.3-11.3 19.6-14.2zm135.7-84.7c-6.6-12.1-24.8-12.9-46.5-13.9c-40.2-1.9-78.2-3.8-77.3 40.3c-.5 18.3 5 58.3 13.2 67.8c13 14.9 76.6 11.8 86.3 7.1c15.8-7.6 36.5-78.9 24.3-101.3z" />
      </svg>
    </div>
  </div>

  <div id="content">
    <!-- 标题 -->
    <div id="title">
      <img
        class="logo"
        draggable="false"
        src="./images/logo.svg"
        alt="Uno Design logo"
      >
      <h1 class="title">
        Uno Design
        <u-link
          href="https://github.com/zgsgs/uno-design"
          target="_blank"
        >
          <u-image
            src="https://img.shields.io/github/stars/zgsgs/uno-design?style=social"
            alt="Uno Design"
          />
        </u-link>
      </h1>

      <h1 class="subtitle">
        可在 vue3 应用程序中快速构建交互界面，看起来还不错。
      </h1>
      <p class="content">
        <strong>🌈 Uno Design</strong>
        是一款灵活、优质的组件库，为开发者、设计师准备。希望开发者可以借用其中的设计，在不久的将来，孕育出更高阶的组件库。
      </p>

      <u-button
        class="start-btn"
        type="primary"
        size="large"
        href="/docs/install"
      >
        开始使用
      </u-button>
    </div>

    <!-- 贡献者 -->
    <div id="contributors">
      <u-text block center bold size="26px">
        Contributors
      </u-text>
      <div class="contributors-box">
        <u-link
          v-for="(item, i) in contributors"
          :key="i"
          :href="item.homePage"
          target="_blank"
        >
          <!-- <u-avatar round :src="item.avatar" /> -->
        </u-link>
      </div>

      <u-button simple type="primary" href="/docs/contributing.html" round>
        加入其中
      </u-button>
    </div>

    <!-- 页脚 -->
    <div id="footer">
      <div class="footer-item">
        <ul v-for="(listItem, index) in bottomList" :key="index" class="list">
          <h4 class="title">
            {{ listItem.title }}
          </h4>
          <li v-for="(list, i) in listItem.item" :key="i" class="item">
            <u-link target="_blank" :href="list.link">
              {{ list.text }}
            </u-link>
          </li>
        </ul>
      </div>

      <p class="code">
        <u-link target="_blank" href="https://beian.miit.gov.cn">
          UnoDesign | 豫ICP备xxx号-2
        </u-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #banner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    min-height: 370px;
    padding-bottom: 30px;

    .logo_box {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      max-width: 1368px;
      z-index: -1;
      overflow: hidden;
      background: -webkit-linear-gradient(
        815deg,
        #395ce3 10%,
        #5ee0dd
      );
      -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;

      .logo {
        width: 500px;
        height: 500px;
        top: 0px;
        right: 0px;
        position: absolute;
        transform: translate(-155px, -77px) scale(1);
        user-select: none;
      }
    }
  }

  #content {
    transition: 0.2s;
    max-width: 1350px;
    height: 500px;
    padding: 30px;
    box-sizing: border-box;
    right: 0;
    left: 0;
    margin: auto;
    top: 140px;
    position: absolute;

    // 标题
    #title {
      .logo {
        width: 120px;
        height: 120px;
        user-select: none;
      }

      .title {
        font-size: 32px;
        line-height: 43px;
        text-align: left;
        letter-spacing: -1.2px;
        font-weight: bold;
        word-break: normal;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        background: -webkit-linear-gradient(
          55deg,
          #395ce3 10%,
          #5ee0dd
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        .u-image {
          margin-left: 20px;
        }
      }

      .u-button {
        margin-top: 19px;
      }

      .subtitle {
        margin-top: 10px;
        font-size: 33px;
        font-weight: 700;
        transition: 0.3s;
        font-weight: 500;
        line-height: 50px;
        transition: 0.3s;
      }

      .content {
        transition: 0.3s;
        max-width: 700px;
        margin-top: 30px;
      }

      .u-button-primary {
        margin-top: 30px;
      }
    }

    // 贡献者
    #contributors {
      margin-top: 66px;
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .u-text {
        margin-bottom: 40px;
      }

      .u-button {
        margin-top: 40px;
      }

      .contributors-box {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .u-avatar {
          margin: 5px;
        }
      }
    }

    // 页脚
    #footer {
      border-top: 1px solid #eee;
      max-width: 800px;
      margin: 0 auto;
      padding: 60px 0;
      box-sizing: border-box;

      .footer-item {
        display: flex;
        justify-content: space-between;
        user-select: none;

        .list {
          .title {
            font-weight: 600;
            line-height: 36px;
            font-size: 15px;
          }

          .item {
            line-height: 36px;
            cursor: pointer;
            font-size: 14px;
          }
        }
      }

      .code {
        margin-top: 30px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;

        a {
          color: #333;
        }
      }
    }
  }

  @media (max-width: 768px) {
    #content {
      top: 200px !important;
    }
  }
</style>
