import React from 'react';
import {ReactTableListAntd} from './ReactTableListAntd';
import {Button, Divider, Modal, Spin} from 'antd';
import {ReactTable} from '../ReactTable';

export class ReactTableAntd extends ReactTable {
    constructor(props) {
        super(props);
        this.tableConfig.tableListElement = ReactTableListAntd;
    }

    handleDeleteData(id) {
        Modal.confirm({
            title: '',
            content: '确认要删除数据',
            okText: '是',
            okType: 'danger',
            cancelText: '否',
            onOk: () => {
                this.requestDeleteData(id);
            }
        });
    }

    getOperateColumsElement() {
        return ([{
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button type="link" onClick={this.handleEditData.bind(this, record)}><u>编辑</u></Button>
                    <Divider type="vertical"/>
                    <Button type="link" onClick={this.handleDeleteData.bind(this, record.id)}><u>删除</u></Button>
                </div>
            ),
        }]);
    }

    render() {
        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <div className="tableQueryPanel">
                        {this.getAddFormElement()}
                        {this.getEditFormElement()}
                        {this.getQueryFormElement()}
                    </div>
                    {this.getTableListElement()}
                </Spin>
            </div>
        );
    }
}

export default ReactTableAntd;