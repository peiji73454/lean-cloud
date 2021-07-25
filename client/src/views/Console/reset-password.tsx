import React from 'react'
import './ConsoleHead/ConsoleHead.less'
import {  Form, Input, Button, Image} from 'antd';
import { FormattedMessage} from 'react-intl'
const $email: any = <FormattedMessage id="email"/>
const $emailMessage: any = <FormattedMessage id="emailMessage"/>
const $resetPassword: any = <FormattedMessage id="resetPassword"/>
const $backToLogin: any = <FormattedMessage id="backToLogin"/>
const $captcha: any = <FormattedMessage id="captcha"/>


export default function RestPassword(props: any) {
    const [form] = Form.useForm();
    const resetPassword = () => {
        form.resetFields()
    }
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            layout='vertical'
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name='email' label={$email} rules={[{required: true, message: $emailMessage}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='captcha' label={$captcha} >
               <div style={{height:'1.944rem'}}>
                   <Input style={{width: '70%',  marginRight: '20px',}}/>
                   <span style={{verticalAlign: 'middle', display: 'inline-block'}}>
                        <Image src="https://cn-n1-console-api.leancloud.cn/1.1/captcha"/>
                    </span>
               </div>
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={() => resetPassword()}>{$resetPassword}</Button>
                <Button type="link" onClick={() => props.history.push('/console')}>{$backToLogin}</Button>
            </Form.Item>
        </Form>
    )
}
