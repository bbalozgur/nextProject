import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Descriptions } from 'antd';

const jobdetail = () => {
  const router = useRouter();
  const { jobId } = router.query;
  const [detail, setDetail] = useState();

  const data = [
    {
      version: '1.0',
      statusCode: 200,
      result: {
        jobId: '1',
        positionName: 'Jandarma Bölge Komutanı',
        companyName: 'Vosyoyvsyvosyv',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl: 'https://localhost/bluecollar/company/job/Default/6.jpg',
        countryCode: 'TR',
        countryName: 'Turkey',
        cityName: 'İstanbul',
        townName: 'Ümraniye',
        address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
        postalCode: 34768,
        hasLatitude: true,
        hasLongitude: true,
        latitude: 41.0266502,
        longitude: 29.1157803,
        description: 'syovsvyosvyoyvsoby',
        status: 1,
      },
    },
    {
      version: '1.0',
      statusCode: 200,
      result: {
        jobId: '2',
        positionName: 'Jandarma Bölge Komutanı',
        companyName: 'Vosyoyvsyvosyv',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl: 'https://localhost/bluecollar/company/job/Default/6.jpg',
        countryCode: 'TR',
        countryName: 'Turkey',
        cityName: 'İstanbul',
        townName: 'Ümraniye',
        address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
        postalCode: 34768,
        hasLatitude: true,
        hasLongitude: true,
        latitude: 41.0266502,
        longitude: 29.1157803,
        description: 'syovsvyosvyoyvsoby',
        status: 1,
      },
    },
    {
      version: '1.0',
      statusCode: 200,
      result: {
        jobId: '3',
        positionName: 'Jandarma Bölge Komutanı',
        companyName: 'Vosyoyvsyvosyv',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl: 'https://localhost/bluecollar/company/job/Default/6.jpg',
        countryCode: 'TR',
        countryName: 'Turkey',
        cityName: 'İstanbul',
        townName: 'Ümraniye',
        address: 'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
        postalCode: 34768,
        hasLatitude: true,
        hasLongitude: true,
        latitude: 41.0266502,
        longitude: 29.1157803,
        description: 'syovsvyosvyoyvsoby',
        status: 1,
      },
    },
  ];

  useEffect(() => {
    if (jobId) {
      const dataSet = data.map((item) => item.result);
      const detailItem = dataSet.filter((x) => x.jobId === jobId.toString());
      setDetail(detailItem[0]);
    }
  }, [jobId]);

  return (
    <>
      <Row justify="center">
        <Col xl={12}>
          <Descriptions
            title="Company Detail"
            bordered
            column={{
              xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1,
            }}
          >
            {detail && Object.keys(detail).map((item) => (
              <Descriptions.Item label={item}>
                {' '}
                {detail[item]}
                {' '}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Col>
      </Row>

    </>
  );
};

export default jobdetail;
