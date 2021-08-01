import {Space, Button, Tooltip, Alert, Skeleton} from 'antd'
import {useState,useEffect} from "react";

export default function Beian(props: any) {
    const [isSkeleton, setSkeleton] = useState<boolean>(true)
    const text = <span>商用版应用可以申请备案，您没有符合条件的应用</span>;
    let component = null
    if (isSkeleton) {
        component = <Skeleton/>
    } else {
        component = (
            <div className="beian">
                <Space direction={'vertical'}>
                    <Tooltip placement="right" title={text}>
                        <Button disabled>
                            域名备案
                        </Button>
                    </Tooltip>
                    <Alert style={{boxShadow: '-5px 0 0 0 #e7a406'}}
                           message="开发版应用不提供备案服务。"
                           type="warning"
                    />
                </Space>
            </div>
        )
    }

    // 相当于 componentDidUpdate (没有最后一个参数时)
    useEffect(() => {
        // 相当于 componentDidMount
        setTimeout(()=>{
            setSkeleton(false)
        },100)
        return () => {
            // 相当于 componentWillUnmount
        }
    }, [])

    return <>
        {
            component
        }
    </>
}
