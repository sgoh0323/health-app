import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, Grid, Collapse, Button, Divider, Skeleton } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import MiniChart from 'components/miniChart';
import { getWeekData } from 'api/testApi';
import moment from 'moment';

const WeekBox = ({ type, isActive = false, children = [] }) => {
    const controls = useAnimation();
    const [weekData, setWeekData] = useState([]);
    const day = ['월', '화', '수', '목', '금', '토', '일'];
    useLayoutEffect(() => {
        // getWeekData({}, data => {
        //     setWeekData(data);
        // });
        setWeekData([
            {
                id: 1,
                date: '2022-06-20',
                activity: 80,
                meal: 20
            },
            {
                id: 2,
                date: '2022-06-21',
                activity: 30,
                meal: 70
            },
            {
                id: 3,
                date: '2022-06-22',
                activity: 100,
                meal: 100
            },
            {
                id: 4,
                date: '2022-06-23',
                activity: 20,
                meal: 100
            },
            {
                id: 5,
                date: '2022-06-24',
                activity: 100,
                meal: 20
            },
            {
                id: 6,
                date: '2022-06-25',
                activity: 0,
                meal: 0
            },
            {
                id: 7,
                date: '2022-06-2',
                activity: 0,
                meal: 0
            }
        ]);
    }, []);

    return (
        <Card className="popupbox">
            <Grid columns={7}>
                {weekData.length > 0
                    ? weekData.map((i, index) => {
                          return (
                              <Grid.Item style={{ textAlign: 'center' }} key={`weekdayItem_${i.id}`}>
                                  <div>{day[index]}</div>
                                  <div>
                                      <MiniChart
                                          day={moment(i.date).day()}
                                          activityRate={i.activity}
                                          mealRate={i.meal}
                                      />
                                  </div>
                              </Grid.Item>
                          );
                      })
                    : [...Array(7)].map((i, index) => {
                          return (
                              <Grid.Item style={{ textAlign: 'center' }} key={`weekdayItem_${index}`}>
                                  <div>{day[index]}</div>
                                  <div style={{ textAlign: 'center', margin: '15px 0px 15px' }}>
                                      <Skeleton
                                          animated
                                          style={{ display: 'inline-flex', height: 45, width: 45, borderRadius: 50 }}
                                      />
                                  </div>
                              </Grid.Item>
                          );
                      })}
            </Grid>
        </Card>
    );
};

export default WeekBox;
