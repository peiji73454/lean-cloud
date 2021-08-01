import {Space, Tooltip, Button, Divider, Typography} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import './Finance.less'

export default function Finance(props: any) {
    const text = <span>原短信余额已合并到账户余额</span>;
    return <>
        <div className="finance"  style={{fontSize: '0.778rem'}}>
            <Space direction={'vertical'}>
                <span>账户余额（华北节点）</span>
                <Space>
                    <strong style={{fontSize: '2.111rem', fontWeight: 'bold'}}>0.00</strong>CNY
                    <Tooltip color='#2db7f5' placement="topLeft" title={text} arrowPointAtCenter>
                        <QuestionCircleOutlined/>
                    </Tooltip>
                </Space>
                <Space>
                    <Button>余额充值</Button>
                    <Button type={'link'}>余额告警</Button>
                    <Button type={'link'}>充值记录</Button>
                    <Button type={'link'}>消费明细</Button>
                </Space>
            </Space>
            <Divider/>
            <Space direction={'vertical'}>
                <Typography.Text>技术支持</Typography.Text>
                <Button size={'large'} className={'technical-support'}>社区技术支持</Button>
                <Link to="/forum">访问用户社区
                    <i style={{marginLeft: -10}} className="iconfont iconfont-external"></i></Link>
                <Typography.Text>商用版应用的创建者、协作者都享有免费的高级技术支持</Typography.Text>
            </Space>
        </div>
    </>
}
