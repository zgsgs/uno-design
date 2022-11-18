<script lang="ts" setup>
import { bottomList, contributors } from './src'
</script>

<template>
  <div id="banner">
    <div class="logo_box">
      <u-image
        class="logo"
        :draggable="false"
        src="./images/logo.svg"
        alt="Uno Design logo"
      />
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
