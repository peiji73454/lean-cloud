import {Button, Card, Divider, InputNumber, notification, Space, Input, Form} from 'antd'
import {CloseCircleOutlined,CloseOutlined} from '@ant-design/icons'
import {useState,useEffect,Fragment} from 'react'
import {RuleObject,StoreValue} from 'rc-field-form/es/interface'
let totalItem:any=[]

export default function Alert(props: any) {

    const [value, setValue] = useState<number>(0);
    const [value1, setValue1] = useState<number>(0);
    const [contactList, setContactList] = useState<any>([]);
    const [editor, setEditor] = useState<Boolean>(false);

    const setNumber = () => {
        setValue1(value);
        notification.info({
            message: <span>设置成功</span>,
            closeIcon: <CloseCircleOutlined/>
        })
    }
    const onChange = (value: number) => {
        setValue(value)
    }

    const onFinish = (values: any) => {
        setContactList(Object.values(values));
        setEditor(false)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const phoneValidator = (rule:RuleObject, value:StoreValue) => {
        if(!value){
                    return Promise.reject('值必填')
         }
        if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value)) {
            return Promise.reject('无效的邮箱或手机号')
        }else{
            return Promise.resolve()
        }
    };

    const FormItem = (index:number)=>(
            <Form.Item>
                <Form.Item name={'phone'+index}  rules={[
                    {  validator:phoneValidator
                    }]} noStyle>
                    <Input
                        style={{ width: '50%' }}
                        placeholder="手机号码或邮箱"
                        size={'large'}
                    />
                </Form.Item>
                <CloseCircleOutlined style={{marginLeft: 10,fontSize:'25px',color:'rgb(0,0,0,0.3)'}} onClick={()=>Delete(index)}/>
            </Form.Item>

        )
    const [mapItem, setMapItem] = useState<any>([{id:0,content:FormItem(0)}]);
    const add = () => {
        totalItem=[...mapItem,{id:mapItem.length,content:FormItem(mapItem.length)}]
        setMapItem(totalItem)
    }
    function Delete (index: any){
        if(totalItem.length===1) {
            return;
        }
        const _index=totalItem.findIndex((item: { id: any; })=>item.id===index)
        totalItem.splice(_index,1)
        setMapItem([...totalItem])
    };
    return <>
        <div className="alert">
            <Card title="账户余额告警">
                <p>告警余额</p>
                <InputNumber onChange={onChange}></InputNumber>
                <Button onClick={setNumber}>设置</Button>
                <p>当账户余额小于 {value1} CNY 时，发送短信、邮件通知。</p>
                <Divider/>
                <Space>
                    自定义告警联系方式<Button size={'small'}
                                     onClick={() => setEditor(editor => !editor)}>{editor && '取消编辑' || '编辑'}</Button>
                </Space>
                <p> 暂未设置自定义告警联系方式。</p>
                <ul>
                    {
                        !editor&&contactList.map((item:any,index:number)=><li key={index}>{item}</li>)
                    }
                </ul>

                <Form
                    style={{display: editor && 'block' || 'none'}}
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    {mapItem.map((item: any,index:number)=><Fragment  key={index}>{item.content}</Fragment>)}
                    <div style={{display: 'flex', justifyContent: 'space-between', width: 400, marginTop: 20}}>
                        <Button onClick={add}>清加手机号或邮箱</Button>
                        <Button type={'primary'} htmlType="submit">保存</Button>
                    </div>

                </Form>

                <Divider/>
                当前用户邮箱 xx@139.com、手机 +86xx 将始终收到相关告警通知。
            </Card>
        </div>
    </>
}

