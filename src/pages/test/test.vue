<template>
    <div class="container">
        <div class="test-container">
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
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.test-container {
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
                background: #F2F9FF;
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
</style>

