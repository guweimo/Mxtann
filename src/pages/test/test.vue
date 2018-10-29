<template>
    <div class="container">
        <div class="test-container" v-show="istest">
            <div class="table">
                <div class="table-header">
                    <div class="table-header-left">开局时间：2018-09-01 15：29</div>
                    <div class="table-header-right">治疗类型：营养食谱</div>
                </div>
                <div class="table-thead">
                    <ul class="thead-main">
                        <li>
                            <div class="thead-main-title">使用时间</div>
                        </li>
                        <li>
                            <div class="thead-main-title">餐饮</div>
                        </li>
                        <li>
                            <div class="thead-main-title">膳食种类</div>
                        </li>
                        <li>
                            <div class="thead-main-title">菜肴名称</div>
                        </li>
                        <li>
                            <div class="thead-main-title">食材</div>
                        </li>
                        <li>
                            <div class="thead-main-title">备注</div>
                        </li>
                    </ul>
                </div>
                <div class="table-body">
                    <div class="left"></div>
                    <div class="right">
                        <div class="item">
                            <div class="item-left"></div>
                            <div class="item-right">
                                <ul class="main">
                                    <li class="list">
                                        <dl>
                                            <dt></dt>
                                            <dt></dt>
                                        </dl>
                                    </li>
                                    <li class="list">
                                        <dl>
                                            <dt></dt>
                                            <dt></dt>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-footer"></div>
            </div>
        </div>
        <div class="transition-container" v-show="istest2">
            <div class="group">
                <div class="cursor">触发</div>
                <div class="bor">
                    <div class="transition-content">
                        1
                    </div>
                </div>
            </div>
        </div>
        <div class="special" v-show="istest3">
            <div class="special-table">
                <div class="special-table-header">
                    <div class="item-title">
                        时间
                    </div>
                    <div class="item-title">
                        编号
                    </div>
                    <div class="item-title">
                        作者
                    </div>
                    <div class="item-title">
                        标题
                    </div>
                    <div class="item-title">
                        内容
                    </div>
                    <div class="item-title">
                        字数
                    </div>
                    <div class="item-title">
                        稿费
                    </div>
                </div>
                <div class="special-table-body">
                    <div class="left">
                        <div class="item-title">
                            你好
                        </div>
                        <div class="item-title">
                            你好
                        </div>
                        <div class="item-title">
                            你好
                        </div>
                    </div>
                    <div class="right">
                        <div class="item">
                            <div class="item-left">
                                <div class="item-title">
                                    dsafd
                                </div>
                            </div>
                            <div class="item-right">
                                <ul class="main">
                                    <li class="list">
                                        <dl>
                                            <dt>dsafd</dt>
                                            <dt>fsdfa</dt>
                                        </dl>
                                    </li>
                                    <li class="list">
                                        <dl>
                                            <dt></dt>
                                            <dt></dt>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            istest: true,
            istest2: false,
            istest3: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 20px;
    min-height: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.table {
    border: 1px solid #dadada;
    border-right: 0;
    box-sizing: border-box;
    margin: 50px;
    .table-header {
        display: flex;
        align-items: center;
        padding: 0 10px;
        .table-header-right {
            margin-left: auto;
        }
    }
    .table-thead {
        width: 100%;
        .thead-main {
            display: flex;
            height: inherit;
            li {
                flex: 1;
                display: flex;
                border-right: 1px solid #dadada;
                justify-content: center;
                align-items: center;
                background: #f2f9ff;
            }
        }
    }
    .table-header,
    .table-footer,
    .table-thead,
    .item-right dt {
        height: 40px;
        border-right: 1px solid #dadada;
    }
    .table-header,
    .table-thead,
    .table-body .left,
    .table-body .right .item-left,
    .table-body .list {
        border-bottom: 1px solid #dadada;
    }
    .table-body,
    .table-body .right .item,
    .table-body dl {
        display: table;
        width: 100%;
    }
    .table-body .left,
    .table-body .right,
    .table-body .right .item-left,
    .table-body .right .item-right,
    .table-body dt {
        display: table-cell;
    }
    .table-body .left,
    .table-body .right .item-left {
        width: 50%;

        border-right: 1px solid #dadada;
    }
    .table-body dt {
        width: 50%;
    }
}

.transition-container {
    .group {
        .cursor {
            cursor: pointer;
        }
        .transition-content {
            display: none;
            margin: 20px;
        }
        .bor {
            border: 1px solid #ccc;
            user-select: none;
        }
        &:hover .transition-content {
            display: block;
        }
    }
}

.special {
    width: 800px;
    min-height: 30px;
    margin: 10px auto;
}

.special-table {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    .special-table-header {
        display: table;
        width: 100%;
    }
    .special-table-body {
        display: table;
        width: 100%;
        text-align: center;
    }
    .special-table-body .left,
    .special-table-body .right {
        display: table-cell;
    }
    .special-table-body .left {
        width: 342px;
    }
    .special-table-body .right {
        width: 458px;
    }
    .item-title {
        display: table-cell;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        width: 114px;
    }
    .special-table-body .right {
        .item {
            display: table-cell;
            width: 100%;
            .item-left {
                display: table-cell;
                width: 114px;
            }
            .item-right {
                display: table-cell;
                dl {
                    display: table-cell;
                }
                dt {
                    display: table-cell;
                    border-right: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    padding: 10px;
                    width: 114px;
                }
            }
        }
    }
}
</style>
