import pandas as pd

file_name = './音乐大数据推荐场景_日报0703.xls'
#
# data1 = pd.read_excel(file_name, sheet_name='客户端时长占比')
# data2 = pd.read_excel(file_name, sheet_name='分场景时长')
# data3 = pd.read_excel(file_name, sheet_name='分场景用户')
# data4 = pd.read_excel(file_name, sheet_name='分场景点击用户')
# data5 = pd.read_excel(file_name, sheet_name='分场景转化率')
# data6 = pd.read_excel(file_name, sheet_name='视频彩铃分场景点击')
# data7 = pd.read_excel(file_name, sheet_name='视频彩铃分场景用户')


# sheet_list = [data1, data2, data3, data4, data5, data6, data7]


def get_data(sheet_name, column_name: str):  # 获取数据

    sheet = pd.read_excel(file_name, sheet_name=sheet_name)

    list_ = []
    x = sheet[column_name]

    for i in x:
        list_.append(i)
    list_ = list_[-31:]  # 取最近31天的数据
    # print(list_)
    result = {
        'sheet_name': sheet_name,
        'column_name': column_name,
        'data': list_
    }
    return result



