import {Button, Form, Divider, Input, Select,Checkbox } from "antd";
import React, {useState} from "react";
import './Register.less'
import {register} from "../../../utils/api";
import {FormattedMessage} from "react-intl";

const $username: any = <FormattedMessage id="username"/>
const $email: any = <FormattedMessage id="email"/>
const $password: any = <FormattedMessage id="password"/>
const $phone: any = <FormattedMessage id="phone"/>
const $emailMessage: any = <FormattedMessage id="emailMessage"/>
const $agreement: any = <FormattedMessage id="agreement"/>
const $requestSms = <FormattedMessage id="requestSms"/>
const $registerAccount: any = <FormattedMessage id="registerAccount"/>
const $loginRedirect: any = <FormattedMessage id="loginRedirect"/>
const {Option} = Select;

function onChange(value: any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val: any) {
    console.log('search:', val);
}




export default function Register(props: any) {
    const [checked, toggleChecked] = useState<boolean>(false);
    function changeCheck(e:any) {
        toggleChecked(e.target.checked)
    }
    const onFinish = async (values: any) => {
        const res: any = await register(values)
        console.log(res)
        props.history.push({pathname: '/console', query: {name: 'jack', age: 12}})
    };
    return <div className={'register'}>
        <Form
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.Item name='username' label={$username} rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='email' label={$email} rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name='password' label={$password} rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item label={$phone}>
                <div className={'smsCode'}>
                <Select
                    showSearch
                    style={{width: '30%', marginRight: '20px'}}
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                >
                    <Option value="0" label="阿尔巴尼亚 (Shqipëri)">阿尔巴尼亚 (Shqipëri)</Option>
                    <Option value="1" label="阿尔及利亚 (Algeria)">阿尔及利亚 (Algeria)</Option>
                    <Option value="2" label="阿富汗 (&#x202B;افغانستان&#x202C;&lrm;)">阿富汗
                        (&#x202B;افغانستان&#x202C;&lrm;)
                    </Option>
                    <Option value="3" label="阿根廷 (Argentina)">阿根廷 (Argentina)</Option>
                    <Option value="4" label="阿拉伯联合酋长国 (&#x202B;الإمارات العربية المتحدة&#x202C;&lrm;)">阿拉伯联合酋长国
                        (&#x202B;الإمارات العربية المتحدة&#x202C;&lrm;)
                    </Option>
                    <Option value="5" label="阿鲁巴 (Aruba)">阿鲁巴 (Aruba)</Option>
                    <Option value="6" label="阿曼 (&#x202B;عُمان&#x202C;&lrm;)">阿曼 (&#x202B;عُمان&#x202C;&lrm;)</Option>
                    <Option value="7" label="阿塞拜疆 (Azərbaycan)">阿塞拜疆 (Azərbaycan)</Option>
                    <Option value="8" label="阿森松岛 (Ascension Island)">阿森松岛 (Ascension Island)</Option>
                    <Option value="9" label="埃及 (&#x202B;مصر&#x202C;&lrm;)">埃及 (&#x202B;مصر&#x202C;&lrm;)</Option>
                    <Option value="10" label="埃塞俄比亚 (Ethiopia)">埃塞俄比亚 (Ethiopia)</Option>
                    <Option value="11" label="爱尔兰 (Ireland)">爱尔兰 (Ireland)</Option>
                    <Option value="12" label="爱沙尼亚 (Eesti)">爱沙尼亚 (Eesti)</Option>
                    <Option value="13" label="安道尔 (Andorra)">安道尔 (Andorra)</Option>
                    <Option value="14" label="安哥拉 (Angola)">安哥拉 (Angola)</Option>
                    <Option value="15" label="安圭拉 (Anguilla)">安圭拉 (Anguilla)</Option>
                    <Option value="16" label="安提瓜和巴布达 (Antigua &amp; Barbuda)">安提瓜和巴布达 (Antigua &amp; Barbuda)</Option>
                    <Option value="17" label="奥地利 (Österreich)">奥地利 (Österreich)</Option>
                    <Option value="18" label="奥兰群岛 (Åland)">奥兰群岛 (Åland)</Option>
                    <Option value="19" label="澳大利亚 (Australia)">澳大利亚 (Australia)</Option>
                    <Option value="20" label="澳门 (澳門)">澳门 (澳門)</Option>
                    <Option value="21" label="巴巴多斯 (Barbados)">巴巴多斯 (Barbados)</Option>
                    <Option value="22" label="巴布亚新几内亚 (Papua New Guinea)">巴布亚新几内亚 (Papua New Guinea)</Option>
                    <Option value="23" label="巴哈马 (Bahamas)">巴哈马 (Bahamas)</Option>
                    <Option value="24" label="巴基斯坦 (&#x202B;پاکستان&#x202C;&lrm;)">巴基斯坦 (&#x202B;پاکستان&#x202C;&lrm;)
                    </Option>
                    <Option value="25" label="巴拉圭 (Paraguay)">巴拉圭 (Paraguay)</Option>
                    <Option value="26" label="巴勒斯坦 (&#x202B;فلسطين&#x202C;&lrm;)">巴勒斯坦 (&#x202B;فلسطين&#x202C;&lrm;)
                    </Option>
                    <Option value="27" label="巴林 (&#x202B;البحرين&#x202C;&lrm;)">巴林 (&#x202B;البحرين&#x202C;&lrm;)
                    </Option>
                    <Option value="28" label="巴拿马 (Panamá)">巴拿马 (Panamá)</Option>
                    <Option value="29" label="巴西 (Brasil)">巴西 (Brasil)</Option>
                    <Option value="30" label="白俄罗斯 (Беларусь)">白俄罗斯 (Беларусь)</Option>
                    <Option value="31" label="百慕大 (Bermuda)">百慕大 (Bermuda)</Option>
                    <Option value="32" label="保加利亚 (България)">保加利亚 (България)</Option>
                    <Option value="33" label="北马里亚纳群岛 (Northern Mariana Islands)">北马里亚纳群岛 (Northern Mariana Islands)
                    </Option>
                    <Option value="34" label="贝宁 (Bénin)">贝宁 (Bénin)</Option>
                    <Option value="35" label="比利时 (Belgium)">比利时 (Belgium)</Option>
                    <Option value="36" label="冰岛 (Ísland)">冰岛 (Ísland)</Option>
                    <Option value="37" label="玻利维亚 (Bolivia)">玻利维亚 (Bolivia)</Option>
                    <Option value="38" label="波多黎各 (Puerto Rico)">波多黎各 (Puerto Rico)</Option>
                    <Option value="39" label="波兰 (Polska)">波兰 (Polska)</Option>
                    <Option value="40" label="波斯尼亚和黑塞哥维那 (Bosna i Hercegovina)">波斯尼亚和黑塞哥维那 (Bosna i Hercegovina)
                    </Option>
                    <Option value="41" label="博茨瓦纳 (Botswana)">博茨瓦纳 (Botswana)</Option>
                    <Option value="42" label="伯利兹 (Belize)">伯利兹 (Belize)</Option>
                    <Option value="43" label="不丹 (འབྲུག)">不丹 (འབྲུག)</Option>
                    <Option value="44" label="布基纳法索 (Burkina Faso)">布基纳法索 (Burkina Faso)</Option>
                    <Option value="45" label="布隆迪 (Uburundi)">布隆迪 (Uburundi)</Option>
                    <Option value="46" label="朝鲜 (북한)">朝鲜 (북한)</Option>
                    <Option value="47" label="赤道几内亚 (Guinea Ecuatorial)">赤道几内亚 (Guinea Ecuatorial)</Option>
                    <Option value="48" label="丹麦 (Danmark)">丹麦 (Danmark)</Option>
                    <Option value="49" label="德国 (Deutschland)">德国 (Deutschland)</Option>
                    <Option value="50" label="东帝汶 (Timor-Leste)">东帝汶 (Timor-Leste)</Option>
                    <Option value="51" label="多哥 (Togo)">多哥 (Togo)</Option>
                    <Option value="52" label="多米尼加共和国 (República Dominicana)">多米尼加共和国 (República Dominicana)</Option>
                    <Option value="53" label="多米尼克 (Dominica)">多米尼克 (Dominica)</Option>
                    <Option value="54" label="俄罗斯 (Россия)">俄罗斯 (Россия)</Option>
                    <Option value="55" label="厄瓜多尔 (Ecuador)">厄瓜多尔 (Ecuador)</Option>
                    <Option value="56" label="厄立特里亚 (Eritrea)">厄立特里亚 (Eritrea)</Option>
                    <Option value="57" label="法国 (France)">法国 (France)</Option>
                    <Option value="58" label="法罗群岛 (Føroyar)">法罗群岛 (Føroyar)</Option>
                    <Option value="59" label="法属波利尼西亚 (Polynésie française)">法属波利尼西亚 (Polynésie française)</Option>
                    <Option value="60" label="法属圭亚那 (Guyane française)">法属圭亚那 (Guyane française)</Option>
                    <Option value="61" label="梵蒂冈 (Città del Vaticano)">梵蒂冈 (Città del Vaticano)</Option>
                    <Option value="62" label="斐济 (Fiji)">斐济 (Fiji)</Option>
                    <Option value="63" label="菲律宾 (Philippines)">菲律宾 (Philippines)</Option>
                    <Option value="64" label="芬兰 (Suomi)">芬兰 (Suomi)</Option>
                    <Option value="65" label="佛得角 (Kabu Verdi)">佛得角 (Kabu Verdi)</Option>
                    <Option value="66" label="福克兰群岛（马尔维纳斯群岛） (Falkland Islands (Islas Malvinas))">福克兰群岛（马尔维纳斯群岛）
                        (Falkland Islands (Islas Malvinas))
                    </Option>
                    <Option value="67" label="冈比亚 (Gambia)">冈比亚 (Gambia)</Option>
                    <Option value="68" label="刚果（布） (Congo-Brazzaville)">刚果（布） (Congo-Brazzaville)</Option>
                    <Option value="69" label="刚果（金） (Jamhuri ya Kidemokrasia ya Kongo)">刚果（金） (Jamhuri ya Kidemokrasia
                        ya Kongo)
                    </Option>
                    <Option value="70" label="哥伦比亚 (Colombia)">哥伦比亚 (Colombia)</Option>
                    <Option value="71" label="哥斯达黎加 (Costa Rica)">哥斯达黎加 (Costa Rica)</Option>
                    <Option value="72" label="格恩西岛 (Guernsey)">格恩西岛 (Guernsey)</Option>
                    <Option value="73" label="格林纳达 (Grenada)">格林纳达 (Grenada)</Option>
                    <Option value="74" label="格陵兰 (Kalaallit Nunaat)">格陵兰 (Kalaallit Nunaat)</Option>
                    <Option value="75" label="格鲁吉亚 (საქართველო)">格鲁吉亚 (საქართველო)</Option>
                    <Option value="76" label="古巴 (Cuba)">古巴 (Cuba)</Option>
                    <Option value="77" label="瓜德罗普 (Guadeloupe)">瓜德罗普 (Guadeloupe)</Option>
                    <Option value="78" label="关岛 (Guam)">关岛 (Guam)</Option>
                    <Option value="79" label="圭亚那 (Guyana)">圭亚那 (Guyana)</Option>
                    <Option value="80" label="哈萨克斯坦 (Казахстан)">哈萨克斯坦 (Казахстан)</Option>
                    <Option value="81" label="海地 (Haiti)">海地 (Haiti)</Option>
                    <Option value="82" label="韩国 (대한민국)">韩国 (대한민국)</Option>
                    <Option value="83" label="荷兰 (Nederland)">荷兰 (Nederland)</Option>
                    <Option value="84" label="荷属加勒比区 (Caribbean Netherlands)">荷属加勒比区 (Caribbean Netherlands)</Option>
                    <Option value="85" label="荷属圣马丁 (Sint Maarten)">荷属圣马丁 (Sint Maarten)</Option>
                    <Option value="86" label="黑山 (Crna Gora)">黑山 (Crna Gora)</Option>
                    <Option value="87" label="洪都拉斯 (Honduras)">洪都拉斯 (Honduras)</Option>
                    <Option value="88" label="基里巴斯 (Kiribati)">基里巴斯 (Kiribati)</Option>
                    <Option value="89" label="吉布提 (Djibouti)">吉布提 (Djibouti)</Option>
                    <Option value="90" label="吉尔吉斯斯坦 (Кыргызстан)">吉尔吉斯斯坦 (Кыргызстан)</Option>
                    <Option value="91" label="几内亚 (Guinée)">几内亚 (Guinée)</Option>
                    <Option value="92" label="几内亚比绍 (Guiné-Bissau)">几内亚比绍 (Guiné-Bissau)</Option>
                    <Option value="93" label="加拿大 (Canada)">加拿大 (Canada)</Option>
                    <Option value="94" label="加纳 (Gaana)">加纳 (Gaana)</Option>
                    <Option value="95" label="加蓬 (Gabon)">加蓬 (Gabon)</Option>
                    <Option value="96" label="柬埔寨 (កម្ពុជា)">柬埔寨 (កម្ពុជា)</Option>
                    <Option value="97" label="捷克 (Česko)">捷克 (Česko)</Option>
                    <Option value="98" label="津巴布韦 (Zimbabwe)">津巴布韦 (Zimbabwe)</Option>
                    <Option value="99" label="喀麦隆 (Cameroun)">喀麦隆 (Cameroun)</Option>
                    <Option value="100" label="卡塔尔 (&#x202B;قطر&#x202C;&lrm;)">卡塔尔 (&#x202B;قطر&#x202C;&lrm;)</Option>
                    <Option value="101" label="开曼群岛 (Cayman Islands)">开曼群岛 (Cayman Islands)</Option>
                    <Option value="102" label="科科斯（基林）群岛 (Kepulauan Cocos (Keeling))">科科斯（基林）群岛 (Kepulauan Cocos
                        (Keeling))
                    </Option>
                    <Option value="103" label="科摩罗 (&#x202B;جزر القمر&#x202C;&lrm;)">科摩罗 (&#x202B;جزر
                        القمر&#x202C;&lrm;)
                    </Option>
                    <Option value="104" label="科特迪瓦 (Côte d’Ivoire)">科特迪瓦 (Côte d’Ivoire)</Option>
                    <Option value="105" label="科威特 (&#x202B;الكويت&#x202C;&lrm;)">科威特 (&#x202B;الكويت&#x202C;&lrm;)
                    </Option>
                    <Option value="106" label="克罗地亚 (Hrvatska)">克罗地亚 (Hrvatska)</Option>
                    <Option value="107" label="肯尼亚 (Kenya)">肯尼亚 (Kenya)</Option>
                    <Option value="108" label="库克群岛 (Cook Islands)">库克群岛 (Cook Islands)</Option>
                    <Option value="109" label="库拉索 (Curaçao)">库拉索 (Curaçao)</Option>
                    <Option value="110" label="拉脱维亚 (Latvija)">拉脱维亚 (Latvija)</Option>
                    <Option value="111" label="莱索托 (Lesotho)">莱索托 (Lesotho)</Option>
                    <Option value="112" label="老挝 (ລາວ)">老挝 (ລາວ)</Option>
                    <Option value="113" label="黎巴嫩 (&#x202B;لبنان&#x202C;&lrm;)">黎巴嫩 (&#x202B;لبنان&#x202C;&lrm;)
                    </Option>
                    <Option value="114" label="利比里亚 (Liberia)">利比里亚 (Liberia)</Option>
                    <Option value="115" label="利比亚 (&#x202B;ليبيا&#x202C;&lrm;)">利比亚 (&#x202B;ليبيا&#x202C;&lrm;)
                    </Option>
                    <Option value="116" label="立陶宛 (Lietuva)">立陶宛 (Lietuva)</Option>
                    <Option value="117" label="列支敦士登 (Liechtenstein)">列支敦士登 (Liechtenstein)</Option>
                    <Option value="118" label="留尼汪 (La Réunion)">留尼汪 (La Réunion)</Option>
                    <Option value="119" label="卢森堡 (Luxembourg)">卢森堡 (Luxembourg)</Option>
                    <Option value="120" label="卢旺达 (Rwanda)">卢旺达 (Rwanda)</Option>
                    <Option value="121" label="罗马尼亚 (România)">罗马尼亚 (România)</Option>
                    <Option value="122" label="马达加斯加 (Madagasikara)">马达加斯加 (Madagasikara)</Option>
                    <Option value="123" label="马恩岛 (Isle of Man)">马恩岛 (Isle of Man)</Option>
                    <Option value="124" label="马耳他 (Malta)">马耳他 (Malta)</Option>
                    <Option value="125" label="马尔代夫 (Maldives)">马尔代夫 (Maldives)</Option>
                    <Option value="126" label="马拉维 (Malawi)">马拉维 (Malawi)</Option>
                    <Option value="127" label="马来西亚 (Malaysia)">马来西亚 (Malaysia)</Option>
                    <Option value="128" label="马里 (Mali)">马里 (Mali)</Option>
                    <Option value="129" label="马其顿（前南斯拉夫马其顿共和国） (Република Македонија)">马其顿（前南斯拉夫马其顿共和国） (Република
                        Македонија)
                    </Option>
                    <Option value="130" label="马绍尔群岛 (Marshall Islands)">马绍尔群岛 (Marshall Islands)</Option>
                    <Option value="131" label="马提尼克 (Martinique)">马提尼克 (Martinique)</Option>
                    <Option value="132" label="马约特 (Mayotte)">马约特 (Mayotte)</Option>
                    <Option value="133" label="毛里求斯 (Moris)">毛里求斯 (Moris)</Option>
                    <Option value="134" label="毛里塔尼亚 (&#x202B;موريتانيا&#x202C;&lrm;)">毛里塔尼亚
                        (&#x202B;موريتانيا&#x202C;&lrm;)
                    </Option>
                    <Option value="135" label="美国 (United States)">美国 (United States)</Option>
                    <Option value="136" label="美属萨摩亚 (American Samoa)">美属萨摩亚 (American Samoa)</Option>
                    <Option value="137" label="美属维尔京群岛 (U.S. Virgin Islands)">美属维尔京群岛 (U.S. Virgin Islands)</Option>
                    <Option value="138" label="蒙古 (Монгол)">蒙古 (Монгол)</Option>
                    <Option value="139" label="蒙特塞拉特 (Montserrat)">蒙特塞拉特 (Montserrat)</Option>
                    <Option value="140" label="孟加拉国 (বাংলাদেশ)">孟加拉国 (বাংলাদেশ)</Option>
                    <Option value="141" label="秘鲁 (Perú)">秘鲁 (Perú)</Option>
                    <Option value="142" label="密克罗尼西亚 (Micronesia)">密克罗尼西亚 (Micronesia)</Option>
                    <Option value="143" label="缅甸 (မြန်မာ)">缅甸 (မြန်မာ)</Option>
                    <Option value="144" label="摩尔多瓦 (Republica Moldova)">摩尔多瓦 (Republica Moldova)</Option>
                    <Option value="145" label="摩洛哥 (Morocco)">摩洛哥 (Morocco)</Option>
                    <Option value="146" label="摩纳哥 (Monaco)">摩纳哥 (Monaco)</Option>
                    <Option value="147" label="莫桑比克 (Moçambique)">莫桑比克 (Moçambique)</Option>
                    <Option value="148" label="墨西哥 (México)">墨西哥 (México)</Option>
                    <Option value="149" label="纳米比亚 (Namibië)">纳米比亚 (Namibië)</Option>
                    <Option value="150" label="瑙鲁 (Nauru)">瑙鲁 (Nauru)</Option>
                    <Option value="151" label="南非 (South Africa)">南非 (South Africa)</Option>
                    <Option value="152" label="南苏丹 (&#x202B;جنوب السودان&#x202C;&lrm;)">南苏丹 (&#x202B;جنوب
                        السودان&#x202C;&lrm;)
                    </Option>
                    <Option value="153" label="尼泊尔 (नेपाल)">尼泊尔 (नेपाल)</Option>
                    <Option value="154" label="尼加拉瓜 (Nicaragua)">尼加拉瓜 (Nicaragua)</Option>
                    <Option value="155" label="尼日尔 (Nijar)">尼日尔 (Nijar)</Option>
                    <Option value="156" label="尼日利亚 (Nigeria)">尼日利亚 (Nigeria)</Option>
                    <Option value="157" label="纽埃 (Niue)">纽埃 (Niue)</Option>
                    <Option value="158" label="挪威 (Norge)">挪威 (Norge)</Option>
                    <Option value="159" label="诺福克岛 (Norfolk Island)">诺福克岛 (Norfolk Island)</Option>
                    <Option value="160" label="帕劳 (Palau)">帕劳 (Palau)</Option>
                    <Option value="161" label="葡萄牙 (Portugal)">葡萄牙 (Portugal)</Option>
                    <Option value="162" label="日本">日本</Option>
                    <Option value="163" label="瑞典 (Sverige)">瑞典 (Sverige)</Option>
                    <Option value="164" label="瑞士 (Schweiz)">瑞士 (Schweiz)</Option>
                    <Option value="165" label="萨尔瓦多 (El Salvador)">萨尔瓦多 (El Salvador)</Option>
                    <Option value="166" label="萨摩亚 (Samoa)">萨摩亚 (Samoa)</Option>
                    <Option value="167" label="塞尔维亚 (Србија)">塞尔维亚 (Србија)</Option>
                    <Option value="168" label="塞拉利昂 (Sierra Leone)">塞拉利昂 (Sierra Leone)</Option>
                    <Option value="169" label="塞内加尔 (Senegal)">塞内加尔 (Senegal)</Option>
                    <Option value="170" label="塞浦路斯 (Κύπρος)">塞浦路斯 (Κύπρος)</Option>
                    <Option value="171" label="塞舌尔 (Seychelles)">塞舌尔 (Seychelles)</Option>
                    <Option value="172" label="沙特阿拉伯 (&#x202B;المملكة العربية السعودية&#x202C;&lrm;)">沙特阿拉伯
                        (&#x202B;المملكة العربية السعودية&#x202C;&lrm;)
                    </Option>
                    <Option value="173" label="圣巴泰勒米 (Saint-Barthélemy)">圣巴泰勒米 (Saint-Barthélemy)</Option>
                    <Option value="174" label="圣诞岛 (Christmas Island)">圣诞岛 (Christmas Island)</Option>
                    <Option value="175" label="圣多美和普林西比 (São Tomé e Príncipe)">圣多美和普林西比 (São Tomé e Príncipe)</Option>
                    <Option value="176" label="圣赫勒拿 (St. Helena)">圣赫勒拿 (St. Helena)</Option>
                    <Option value="177" label="圣基茨和尼维斯 (St. Kitts &amp; Nevis)">圣基茨和尼维斯 (St. Kitts &amp; Nevis)</Option>
                    <Option value="178" label="圣卢西亚 (St. Lucia)">圣卢西亚 (St. Lucia)</Option>
                    <Option value="179" label="圣马丁岛 (Saint-Martin)">圣马丁岛 (Saint-Martin)</Option>
                    <Option value="180" label="圣马力诺 (San Marino)">圣马力诺 (San Marino)</Option>
                    <Option value="181" label="圣皮埃尔和密克隆群岛 (Saint-Pierre-et-Miquelon)">圣皮埃尔和密克隆群岛
                        (Saint-Pierre-et-Miquelon)
                    </Option>
                    <Option value="182" label="圣文森特和格林纳丁斯 (St. Vincent &amp; Grenadines)">圣文森特和格林纳丁斯 (St.
                        Vincent &amp; Grenadines)
                    </Option>
                    <Option value="183" label="斯里兰卡 (ශ්&zwj;රී ලංකාව)">斯里兰卡 (ශ්&zwj;රී ලංකාව)</Option>
                    <Option value="184" label="斯洛伐克 (Slovensko)">斯洛伐克 (Slovensko)</Option>
                    <Option value="185" label="斯洛文尼亚 (Slovenija)">斯洛文尼亚 (Slovenija)</Option>
                    <Option value="186" label="斯瓦尔巴和扬马延 (Svalbard og Jan Mayen)">斯瓦尔巴和扬马延 (Svalbard og Jan Mayen)
                    </Option>
                    <Option value="187" label="斯威士兰 (Swaziland)">斯威士兰 (Swaziland)</Option>
                    <Option value="188" label="苏丹 (&#x202B;السودان&#x202C;&lrm;)">苏丹 (&#x202B;السودان&#x202C;&lrm;)
                    </Option>
                    <Option value="189" label="苏里南 (Suriname)">苏里南 (Suriname)</Option>
                    <Option value="190" label="索马里 (Soomaaliya)">索马里 (Soomaaliya)</Option>
                    <Option value="191" label="所罗门群岛 (Solomon Islands)">所罗门群岛 (Solomon Islands)</Option>
                    <Option value="192" label="塔吉克斯坦 (Tajikistan)">塔吉克斯坦 (Tajikistan)</Option>
                    <Option value="193" label="台湾 (台灣)">台湾 (台灣)</Option>
                    <Option value="194" label="泰国 (ไทย)">泰国 (ไทย)</Option>
                    <Option value="195" label="坦桑尼亚 (Tanzania)">坦桑尼亚 (Tanzania)</Option>
                    <Option value="196" label="汤加 (Tonga)">汤加 (Tonga)</Option>
                    <Option value="197" label="特克斯和凯科斯群岛 (Turks &amp; Caicos Islands)">特克斯和凯科斯群岛 (Turks &amp; Caicos
                        Islands)
                    </Option>
                    <Option value="198" label="特立尼达和多巴哥 (Trinidad &amp; Tobago)">特立尼达和多巴哥 (Trinidad &amp; Tobago)
                    </Option>
                    <Option value="199" label="突尼斯 (Tunisia)">突尼斯 (Tunisia)</Option>
                    <Option value="200" label="图瓦卢 (Tuvalu)">图瓦卢 (Tuvalu)</Option>
                    <Option value="201" label="土耳其 (Türkiye)">土耳其 (Türkiye)</Option>
                    <Option value="202" label="土库曼斯坦 (Turkmenistan)">土库曼斯坦 (Turkmenistan)</Option>
                    <Option value="203" label="托克劳 (Tokelau)">托克劳 (Tokelau)</Option>
                    <Option value="204" label="瓦利斯和富图纳 (Wallis &amp; Futuna)">瓦利斯和富图纳 (Wallis &amp; Futuna)</Option>
                    <Option value="205" label="瓦努阿图 (Vanuatu)">瓦努阿图 (Vanuatu)</Option>
                    <Option value="206" label="危地马拉 (Guatemala)">危地马拉 (Guatemala)</Option>
                    <Option value="207" label="委内瑞拉 (Venezuela)">委内瑞拉 (Venezuela)</Option>
                    <Option value="208" label="文莱 (Brunei)">文莱 (Brunei)</Option>
                    <Option value="209" label="乌干达 (Uganda)">乌干达 (Uganda)</Option>
                    <Option value="210" label="乌克兰 (Україна)">乌克兰 (Україна)</Option>
                    <Option value="211" label="乌拉圭 (Uruguay)">乌拉圭 (Uruguay)</Option>
                    <Option value="212" label="乌兹别克斯坦 (Oʻzbekiston)">乌兹别克斯坦 (Oʻzbekiston)</Option>
                    <Option value="213" label="西班牙 (España)">西班牙 (España)</Option>
                    <Option value="214" label="希腊 (Ελλάδα)">希腊 (Ελλάδα)</Option>
                    <Option value="215" label="香港">香港</Option>
                    <Option value="216" label="新加坡 (Singapore)">新加坡 (Singapore)</Option>
                    <Option value="217" label="新喀里多尼亚 (Nouvelle-Calédonie)">新喀里多尼亚 (Nouvelle-Calédonie)</Option>
                    <Option value="218" label="新西兰 (New Zealand)">新西兰 (New Zealand)</Option>
                    <Option value="219" label="匈牙利 (Magyarország)">匈牙利 (Magyarország)</Option>
                    <Option value="220" label="叙利亚 (&#x202B;سوريا&#x202C;&lrm;)">叙利亚 (&#x202B;سوريا&#x202C;&lrm;)
                    </Option>
                    <Option value="221" label="牙买加 (Jamaica)">牙买加 (Jamaica)</Option>
                    <Option value="222" label="亚美尼亚 (Հայաստան)">亚美尼亚 (Հայաստան)</Option>
                    <Option value="223" label="也门 (&#x202B;اليمن&#x202C;&lrm;)">也门 (&#x202B;اليمن&#x202C;&lrm;)</Option>
                    <Option value="224" label="伊拉克 (&#x202B;العراق&#x202C;&lrm;)">伊拉克 (&#x202B;العراق&#x202C;&lrm;)
                    </Option>
                    <Option value="225" label="伊朗 (&#x202B;ایران&#x202C;&lrm;)">伊朗 (&#x202B;ایران&#x202C;&lrm;)</Option>
                    <Option value="226" label="以色列 (&#x202B;ישראל&#x202C;&lrm;)">以色列 (&#x202B;ישראל&#x202C;&lrm;)
                    </Option>
                    <Option value="227" label="意大利 (Italia)">意大利 (Italia)</Option>
                    <Option value="228" label="印度 (भारत)">印度 (भारत)</Option>
                    <Option value="229" label="印度尼西亚 (Indonesia)">印度尼西亚 (Indonesia)</Option>
                    <Option value="230" label="英国 (United Kingdom)">英国 (United Kingdom)</Option>
                    <Option value="231" label="英属维尔京群岛 (British Virgin Islands)">英属维尔京群岛 (British Virgin Islands)
                    </Option>
                    <Option value="232" label="英属印度洋领地 (British Indian Ocean Territory)">英属印度洋领地 (British Indian Ocean
                        Territory)
                    </Option>
                    <Option value="233" label="约旦 (&#x202B;الأردن&#x202C;&lrm;)">约旦 (&#x202B;الأردن&#x202C;&lrm;)
                    </Option>
                    <Option value="234" label="越南 (Việt Nam)">越南 (Việt Nam)</Option>
                    <Option value="235" label="赞比亚 (Zambia)">赞比亚 (Zambia)</Option>
                    <Option value="236" label="泽西岛 (Jersey)">泽西岛 (Jersey)</Option>
                    <Option value="237" label="乍得 (Tchad)">乍得 (Tchad)</Option>
                    <Option value="238" label="直布罗陀 (Gibraltar)">直布罗陀 (Gibraltar)</Option>
                    <Option value="239" label="智利 (Chile)">智利 (Chile)</Option>
                    <Option value="240" label="中非共和国 (République centrafricaine)">中非共和国 (République centrafricaine)
                    </Option>
                    <Option value="241" selected="selected" label="中国">中国</Option>
                </Select>
                    <Input addonBefore='+86'/>
                </div>
                <div className={'smsCode'}>
                    <Input placeholder={'短信验证码'}
                           style={{width: '80%', marginRight: '20px'}}/>
                        <Button>{$requestSms}</Button>
                </div>
                <div className="smsCode">
                    <Checkbox onChange={changeCheck}>{$agreement}</Checkbox>
                </div>
            </Form.Item>
            <Form.Item>
                <Button disabled={!checked} type="primary" htmlType="submit">{$registerAccount}</Button>
            </Form.Item>
            <Divider />
            <Form.Item>
                <Button onClick={() => props.history.push('/console')}>{$loginRedirect}</Button>
            </Form.Item>
        </Form>
    </div>
}

