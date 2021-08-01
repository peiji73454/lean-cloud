import {Button,Modal,Form,Input,notification} from 'antd'
import {ReactNode, useEffect, useState} from 'react'
export default function Alert({location,history}:any){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const deleteAccount = () => {
        notification.error({
            message:'注销账号失败',
            description:'输入的用户密码不匹配'
        })
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



    let title:ReactNode
    useEffect(()=>{
        const account='xxx@139'
        title=<span>注销账号 {account}</span>
        return ()=>{

        }
    },[])

    return <>
       <div className="deleteAccount" style={{fontSize:'0.778rem'}}>
           <p>在注销账号前，请确认：</p>
           <ul>
               <li  style={{textIndent:'20px',listStyle:'disc inside'}}>你拥有的所有应用都已删除或转移。</li>
               <li  style={{textIndent:'20px',listStyle:'disc inside'}}>你拥有的所有团队都已删除。</li>
           </ul>
           <Button type="primary" danger onClick={showModal}>注销账号</Button>
           <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                  footer={[
                      <Button type="link" onClick={handleCancel}>
                          取消
                      </Button>,
                      <Button
                          onClick={deleteAccount}
                      >
                          注销
                      </Button>,
                  ]}
           >
               <p>账号注销后无法恢复。</p>
               <Form
                   name="basic"
                   initialValues={{ remember: true }}
                   onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
               >
                   <Form.Item
                       label="Password"
                       name="password"
                       rules={[{ required: true, message: 'Please input your password!' }]}
                   >
                       <Input.Password />
                   </Form.Item>

               </Form>
           </Modal>
       </div>
    </>
}
