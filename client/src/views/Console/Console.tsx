import React, {useState} from 'react'
import './ConsoleHead/ConsoleHead.less'
import {Menu, Dropdown, Form, Input, Button, Divider, Alert} from 'antd';
import {FormattedMessage} from 'react-intl';
import {pwdLogin} from '../../utils/api'
import {connect} from "react-redux";

const $email: any = <FormattedMessage id="email"/>
const $emailMessage: any = <FormattedMessage id="emailMessage"/>
const $password: any = <FormattedMessage id="password"/>
const $confirmPassword: any = <FormattedMessage id="confirmPassword"/>
const $passwordMessage: any = <FormattedMessage id="passwordMessage"/>
const $login = <FormattedMessage id="login"/>
const $resetPassword: any = <FormattedMessage id="resetPassword"/>
const $registerInfo: any = <FormattedMessage id="registerInfo"/>

function Console(props: any) {
    const {user, setUserInfo} = props
    const [menuName, setMenuName] = useState<string>('华北');
    const onFinish = async (values: any) => {
        const res: any = await pwdLogin(values)
        setUserInfo(res.data)
        props.history.push({pathname: '/console/Account/verify', query: {name: 'jack', age: 12}})
    };
    return (
        <Form
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.Item name='email' label={$email} rules={[{required: true,type: 'email', message: $emailMessage}]}>
                <Input/>
            </Form.Item>
            <Form.Item label={$password} name='password'  rules={[
                {
                    required: true,
                },
                () => ({
                    validator(_, value) {
                        if (!value||/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{6,}$/.test(value)) {
                            return Promise.resolve();
                        }
                            return Promise.reject(new Error('密码长度不得少于6位，且必须包含字母，数字，特殊符号'));
                    },
                }),
            ]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item label={$confirmPassword} name='confirmPassword'  rules={[
                {
                    required: true,
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
            ]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                <div className={'tip'}>
                    忘记密码? 您可以选择<Button type="link"
                                       onClick={() => props.history.push('/console/reset-password')}>{$resetPassword}</Button>
                </div>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{$login}</Button>
                <div className={'tip'}>
                    当前节点： {menuName}
                </div>
            </Form.Item>
            <Divider/>
            <Form.Item>
                <Button onClick={() => props.history.push('/console/register')}>{$registerInfo}</Button>
            </Form.Item>
            <Form.Item>
                <Alert
                    message={<ul className={'bulleted'}>
                        <li>第三方账号登录功能已停用。原来通过第三方账号登录的用户，可以通过邮箱重置密码之后，使用邮箱与密码登录。</li>
                        <li>如果忘记邮箱或重置密码遇到问题，请 联系我们。</li>
                    </ul>}
                    type="info"
                />
            </Form.Item>
        </Form>
    )
}

function mapStateToProps(state: any, ownProps: any) {
    const {user} = state
    return {
        user
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        setUserInfo: (value: any) => dispatch({type: 'user', value})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Console);
