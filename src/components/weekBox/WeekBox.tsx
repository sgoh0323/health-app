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
        getWeekData({}, data => {
            setWeekData(data);
        });
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
