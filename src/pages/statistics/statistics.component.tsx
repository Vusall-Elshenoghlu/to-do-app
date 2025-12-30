import {Card, Col, DatePicker, Row, Spin, Statistic} from 'antd';
import {useHomeStatistics} from '../home/actions/home.query';
import {useHomeStyles} from './statistics.style';
import {Column, Pie} from '@ant-design/charts';

const {RangePicker} = DatePicker;

const StatisticComponent = () => {
    const classes = useHomeStyles();
    const {data, loading, setRange} = useHomeStatistics();

    if (loading || !data) return <Spin />;

    return (
        <div className={classes.root}>
            <Card className={classes.filter}>
                <RangePicker
                    onChange={(dates) =>
                        setRange({
                            from: dates?.[0]?.format('YYYY-MM-DD'),
                            to: dates?.[1]?.format('YYYY-MM-DD'),
                        })
                    }
                />
            </Card>

            <Row gutter={16}>
                <Col span={6}>
                    <Card>
                        <Statistic title='Bütün sifarişlər' value={data.orders.total} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title='Bugünkü sifarişlər' value={data.orders.today} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title='Ümumi gəlir' value={data.revenue.total} suffix='₼' />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title='Bugünkü gəlir' value={data.revenue.today} suffix='₼' />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16} style={{marginTop: 24}}>
                <Col span={12}>
                    <Card title='Ödəniş statusu'>
                        <Pie
                            data={[
                                {type: 'Uğurlu', value: data.payments.success},
                                {type: 'Uğursuz', value: data.payments.failed},
                            ]}
                            angleField='value'
                            colorField='type'
                        />
                    </Card>
                </Col>

                <Col span={12}>
                    <Card title='Ödəniş növü'>
                        <Column
                            data={[
                                {type: 'Nağd', value: data.methods.cash},
                                {type: 'Kart', value: data.methods.card},
                            ]}
                            xField='type'
                            yField='value'
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default StatisticComponent;
