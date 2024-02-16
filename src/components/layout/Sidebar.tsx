import {FC, memo, useEffect, useState} from "react";
import {siderStyle} from "../../styles/style.ts";
import {Card, Layout, List, Statistic, Tag, Typography} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import {CryptoAssetsAPIResponse, CryptoDataAPIResponse} from "../../vite-env";
import {percentDifference} from "../../utils/utils.ts";
import {nanoid} from "@reduxjs/toolkit";

type PropsType = {
    assets: CryptoAssetsAPIResponse | undefined,
    cryptoData: CryptoDataAPIResponse | undefined,
    isCryptoDataError: boolean,
    isCryptoDataLoading: boolean,
    _isAssetsLoading: boolean,
    _isAssetsError: boolean
}

type AssetsResultState = {
    grow: boolean,
    growPercent: number
    totalAmount: number
    totalProfit: number
    id: string
    amount: number
    price: number
    date: string
}


export const Sidebar: FC<PropsType> = memo((props) => {
    Sidebar.displayName = 'Sidebar'

    const [assetsResult, setAssetsResult] = useState<AssetsResultState[]>([])
    const {
        _isAssetsLoading,
        _isAssetsError,
        isCryptoDataError,
        cryptoData,
        isCryptoDataLoading,
        assets
    } = props

    useEffect(() => {
        if (assets && cryptoData) {

            setAssetsResult(
                assets.map(asset => {
                    const coin = cryptoData.result.find(c => c.id === asset.id)
                    return {
                        grow: asset.price < coin!.price,
                        growPercent: percentDifference(asset.price, coin!.price),
                        totalAmount: asset.amount * coin!.price,
                        totalProfit: asset.amount * coin!.price - asset.amount * asset.price,
                        ...asset
                    }
                }))
        }
    }, [assets, cryptoData])
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assetsResult ? assetsResult.map(asset => (
                <Card key={nanoid()} style={{marginBottom: '1rem'}}>
                    <Statistic
                        title={asset.id.toUpperCase()}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{color: asset.grow ? '#3f8600' : '#cf1322'}}
                        prefix={asset.grow ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
                        suffix="$"

                    />

                    <List
                        size={'small'}
                        dataSource={[
                            {title: 'Total Profit', value: asset.totalProfit.toFixed(2) + '$', withTag: true},
                            {title: 'Asset Amount', value: asset.amount, isPlain: true},
                            // {title: 'Difference', value: asset.growPercent.toFixed(2) + '$'},
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <Typography.Text>{item.title}</Typography.Text>
                                {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                                {item.isPlain && <Typography.Text>{item.value}</Typography.Text>}
                                {!item.isPlain && (
                                    <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value}</Typography.Text>

                                )}
                            </List.Item>
                        )}

                    />
                </Card>

            )) : 'No data'}

        </Layout.Sider>
    )
})