import React, { Component } from 'react'
import { Modal } from 'antd'

let instances;

export class LoadingControl {
    static show() {
        console.log("instances", instances)
        instances.setState(() => ({
            isShow: false
        }))
    }

    static hide() {
        instances.setState(() => ({
            isShow: false
        }))
    }
}

export class LoadingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        instances = this
    }

    render() {
        const { isShow } = this.state;
        return (
            <Modal
                visible={isShow}
            >
                <div>
                    单例  弹窗
                </div>
            </Modal>
        )
    }
}

