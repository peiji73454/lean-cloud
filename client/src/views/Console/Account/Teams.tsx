import {useState} from "react";
import {Modal, Button, Form, Input, Row, Col, notification, Space} from 'antd'
import {Link} from "react-router-dom";
export default function Alert(props:any){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const save=()=>{
        notification.error({
            message: <div>用户邮箱未验证，请进入<a onClick={()=>props.history.push('accountSetting')}>帐号设置</a> 发送验证邮件。</div>,
        });
    }
    return <>
       <div className="teams">
           <Button onClick={showModal}>
               添加团队
           </Button>
           <Modal centered title="添加团队" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
               <Form
                   layout={'vertical'}
                   name="basic"
                   initialValues={{ remember: true }}
                   onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
               >
                   <Form.Item
                       label="团队名称"
                   >
                       <Row>
                           <Col span={20}><Input /></Col>
                           <Col span={4}>
                               <Button onClick={save}>保存</Button>
                           </Col>
                       </Row>
                   </Form.Item>
               </Form>
           </Modal>
       </div>
    </>
}
