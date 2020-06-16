import React, { useState, useEffect } from 'react';
import {
  Row, Col, Select, List, Avatar,
} from 'antd';

const { Option } = Select;

const jobList = () => {
  const data = {
    version: '1.0',
    statusCode: 200,
    result: {
      items: [
        {
          jobid: '1',
          positionname: 'Gerber Operatörü',
          companyname: 'Test1',
          durationday: 0,
          durationdaytext: 'Taze çıktı!',
          imageurl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityname: 'İstanbul',
          townname: 'Çengelköy Mahallesi',
        },
        {
          jobid: '2',
          positionname: 'kıdemli yazilimci',
          companyname: 'Test1',
          durationday: 0,
          durationdaytext: 'Taze çıktı!',
          imageurl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityname: 'Ankara',
          townname: 'Çengelköy Mahallesi',
        },
        {
          jobid: '3',
          positionname: 'yazilim mühendisliği',
          companyname: 'Test3',
          durationday: 0,
          durationdaytext: 'Taze çıktı!',
          imageurl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityname: 'İstanbul',
          townname: 'Çengelköy Mahallesi',
        },
        {
          jobid: '4',
          positionname: 'backend developer',
          companyname: 'Test4',
          durationday: 0,
          durationdaytext: 'Taze çıktı!',
          imageurl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityname: 'Adana',
          townname: 'Çengelköy Mahallesi',
        },
        {
          jobid: '5',
          positionname: 'backend developer',
          companyname: 'test 5',
          durationday: 0,
          durationdaytext: 'Taze çıktı!',
          imageurl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityname: 'Giresun',
          townname: 'Çengelköy Mahallesi',
        },
      ],
      total: 1,
    },
  };

  const [joblist, setjoblist] = useState(data.result.items);

  const [positions, setPositions] = useState([]);
  const [cityname, setCityname] = useState([]);

  useEffect(() => {
    const positionList = [...new Set(data.result.items.map((x) => x.positionname))];
    setPositions(positionList);

    const citynameList = [...new Set(data.result.items.map((x) => x.cityname))];
    setCityname(citynameList);
  }, []);

  const handleChange = (value) => {
    if (value.length === 0) {
      setjoblist(data.result.items);
    } else {
      const newList = joblist.filter((item) => item.positionname === value.toString());
      setjoblist(newList);
    }
  };

  const handleLocation = (value) => {
    if (value.length === 0) {
      setjoblist(data.result.items);
    } else {
      const newList = joblist.filter((item) => item.cityname === value.toString());
      setjoblist(newList);
    }
  };

  return (
    <>
      <Row justify="center">
        <Col xl={12}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please Select Position"
            onChange={handleChange}
          >
            {positions.map((item) => <Option key={item}>{item}</Option>)}
          </Select>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select Location"
            onChange={handleLocation}
          >
            {cityname.map((item) => <Option key={item}>{item}</Option>)}
          </Select>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={12}>
          <List
            itemLayout="horizontal"
            dataSource={joblist}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={(
                    <a href={`jobdetail/${item.jobid}`}>
                      {item.companyname}
                      {' '}
                      -
                      {' '}
                      {item.positionname}
                    </a>
)}
                  description={item.townname}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default jobList;
