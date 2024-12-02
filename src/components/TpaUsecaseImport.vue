<script setup lang="ts">

</script>

<template>
    <div class="wrapper">
        <div class="header">
            <div class="title-wrapper">
                <div class="rectangle"></div>
                <div class="title">TPA用例导入</div>
            </div>
       
        </div>
        <div class="content">
            <div class="content__function">
                <div class="content__function__selectedCount">
                    <input type="select">
                    <!-- 下拉框 -->
                    <div class="selectedContent">
                        已选234项测试用例
                    </div>
                </div>
                <div class="content__function__searchNFilter">
                    <div class="searchUnfold">
                        <div class="searchIcon">

                        </div>
                        <!-- 1. icon search -->
                    </div>
                </div>
            </div>
            <div class="content__main"></div>
            <div class="content__buttons"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper{
    .header{
        .title-wrapper{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 172px;//Hug (172px)px
            height:29px;// Hug (29px)px
            box-sizing: border-box;
            padding: 0px 0px 0px 43px;
            gap: 8px;
            opacity: 0px;

            .rectangle{
                    width: 3px;
                    height: 17px;
                    gap: 0px;
                    opacity: 0px;
                    background: #5A78FF;

                }
                .title{
                    width: 118px;
                    height: 29px;
                    gap: 0px;
                    opacity: 0px;
                    color: #283A64;
                    font-family: Noto Sans SC;
                    font-size: 18px;//20px
                    font-weight: 700;
                    line-height: 28.96px;//28.96px
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
        }

    }
    .content{
        width:800px ;//Fill (1,500px)px
        height: 300px;//Fill (744px)px
        gap: 0px;
        opacity: 0px;
        .content__function{
            width:500px;// Fill (1,500px)px
            height: 40px;//Hug (40px)px
            gap: 0px;
            justify: space-between;
            opacity: 0px;
            .content__function__selectedCount{
                width: Hug (110px)px;
                height: Hug (17px)px;
                gap: 16px;
                opacity: 0px;
                .content__function__selectedCount input{
                    width: Fixed (280px)px;
                    height: Fixed (40px)px;
                    padding: 8px 16px 8px 16px;
                    gap: 0px;
                    border-radius: 6px 0px 0px 0px;
                    border: 1px 0px 0px 0px;
                    justify: space-between;
                    opacity: 0px;
                    border: 1px solid #E1E1E1
                }
                .selectedContent{
                    width: 110px;
                    height: 17px;
                    gap: 0px;
                    opacity: 0px;
                    font-family: Noto Sans SC;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 17.38px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }

            }
            .content__function__searchNFilter{

                width: Hug (248px)px;
                height: Hug (40px)px;
                gap: 32px;
                opacity: 0px;

                .searchUnfold{
                    width: Fixed (465px)px;
                    height: Fixed (40px)px;
                    padding: 2.86px 12.86px 2.86px 12.86px;
                    gap: 7.14px;
                    border-radius: 7.14px 0px 0px 0px;
                    opacity: 0px;
                    background: #F4F4F4;
                    .searchIcon{
                        width: 24px;
                        height: 24px;
                        padding: 3.57px 4px 4.43px 4px;
                        gap: 0px;
                        opacity: 0px;

                    }
                }

            }

        }
        .content__main{
            width: 500px;//Fill (1,500px)px
            height: 248px;//Fill (648px)px
            gap: 0px;
            border: 1px 0px 0px 0px;
            opacity: 0px;
            border: 1px solid #E4E7ED
        }
        .content__buttons{
            width: Fill (1,500px)px;
            height: Hug (56px)px;
            padding: 8px 0px 8px 0px;
            gap: 16px;
            opacity: 0px;

        }

    }
}
</style>