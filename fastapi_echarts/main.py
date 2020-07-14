from fastapi import FastAPI
from starlette.staticfiles import StaticFiles
from starlette.responses import JSONResponse, RedirectResponse

from fastapi_echarts.data_read import get_data

app = FastAPI()

app.mount('/static', StaticFiles(directory='static'), name='static')


@app.get("/")
async def index():
    return RedirectResponse(url='/static/home_page.html')


@app.get("/data/")
async def data():
    all_data_list = [[{'sheet_name': '客户端时长占比'},
                      {'column_names': ['日期', '客户端总时长（万min）', '推荐总时长（万min）',
                                        '推荐时长占比（%）', '客户端总用户量（万人）',
                                        '推荐总用户量（万人）', '推荐用户量占比（%）'
                                        ]
                       }
                      ],
                     [{'sheet_name': '分场景时长'},
                      {'column_names': ['日期', '私人FM（万min）', '今日推荐（万min）',
                                        '尖叫热歌榜（万min）', '尖叫新歌榜（万min）',
                                        '尖叫原创榜（万min）'
                                        ]
                       }
                      ],
                     [{'sheet_name': '分场景用户'},
                      {'column_names': ['日期', '私人FM（万人）', '今日推荐（万人）',
                                        '尖叫热歌榜（万人）', '尖叫新歌榜（万人）',
                                        '尖叫原创榜（万人）', '推荐触点总试听量（万人）'
                                        ]
                       }
                      ],
                     [{'sheet_name': '分场景点击用户'},
                      {'column_names': ['日期', '私人FM（万人）', '今日推荐（万人）',
                                        '尖叫热歌榜（万人）', '尖叫新歌榜（万人）',
                                        '尖叫原创榜（万人）', '推荐触点总点击用户（万人）'
                                        ]
                       }
                      ],
                     [{'sheet_name': '分场景转化率'},
                      {'column_names': ['日期', '私人FM（%）', '今日推荐（%）',
                                        '尖叫热歌榜（%）', '尖叫新歌榜（%）',
                                        '尖叫原创榜（%）'
                                        ]
                       }
                      ],
                     [{'sheet_name': '视频彩铃分场景点击'},
                      {'column_names': ['日期', '视频彩铃H5-精选内容推荐', '视频彩铃H5-猜你喜欢',
                                        '视频彩铃H5-包月排行'
                                        ]
                       }
                      ],
                     [{'sheet_name': '视频彩铃分场景用户'},
                      {'column_names': ['日期', '视频彩铃H5-精选内容推荐', '视频彩铃H5-猜你喜欢',
                                        '视频彩铃H5-包月排行'
                                        ]
                       }
                      ],
                     ]

    data_list = []
    print(data_list)
    for item in all_data_list:
        for i in range(len(item[1]['column_names'])):
            x = get_data(item[0]['sheet_name'], item[1]['column_names'][i])
            data_list.append(x)
    # print(data_list)

    # data_dict1 = get_data('客户端时长占比', '客户端总时长(万min)')
    # data_dict2 = get_data('客户端时长占比', '客户端总用户量(万人)')
    # data_dict3 = get_data('客户端时长占比', '日期')
    # data_dict4 = get_data('客户端时长占比', '推荐时长占比（%）')
    # data_dict5 = get_data('客户端时长占比', '推荐用户量占比（%）')

    context = {
        'code': 200,
        'data': data_list
    }

    return JSONResponse(context)


if __name__ == '__main__':
    from uvicorn import run

    run(app, host='127.0.0.1', port=8000)

# uvicorn main:app --reload
