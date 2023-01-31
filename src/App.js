import './App.css';
import { Button ,Select,Radio,Input,Checkbox,Table,ConfigProvider, Space } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';

function App() {
  const  [currentTheme,setcurrentTheme]= useState ('light')
  const lightTheme = {
    colorPrimary:"green",
    colorTextLightSolid:"White",
    colorTextBase:"green"
  }
  const darkTheme ={
    colorPrimary:"black",
    colorTextLightSolid:"White",
    colorTextBase:"black"
  }
  
  
  return (
    <div className="App">
      <ConfigProvider
      theme={{
        token: currentTheme==='light'?lightTheme:darkTheme,
      }}>
        <Space direction='vertical' size={12}>
          <Radio.Group value={currentTheme} onChange={(e)=>
          {setcurrentTheme (e.target.value )}}  >
            <Radio value={'light'}>Green</Radio>
            <Radio value={'dark'}>Black</Radio>
            </Radio.Group>
        <Button type='primary'>Click me</Button>
        <Radio>Radio</Radio>
        <ConfigProvider
        theme={{
          inherit:false,
          token:{
            colorPrimary:"Purple"
          }
        }}>
        <Radio>Radio with other color</Radio>
        </ConfigProvider>
        <Checkbox>Checkbox</Checkbox>
        <Input placeholder='Type Here'/>
        <Select placeholder='Select'/>
        <Table columns={[{title:'column',dataIndex:'col'}]} dataSource={[{col:'value1'}]}/>
        </Space>
      </ConfigProvider>
    </div>
  );
}

export default App;
