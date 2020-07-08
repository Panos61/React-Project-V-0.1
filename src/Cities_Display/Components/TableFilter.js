import React from 'react';
import { Breadcrumb, Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Event',
    dataIndex: 'name',
  },
];

const data = [
  { key: 1, name: 'Μουσική' },
  { key: 2, name: 'Αθλητισμός' },
  { key: 3, name: 'Διασκέδαση' },
  { key: 4, name: 'Σινεμά' },
  { key: 5, name: 'Τέχνες' },
  { key: 6, name: 'Χορός' },
  { key: 7, name: 'Παιδικά' },
  { key: 8, name: 'Social_Events' },
];

class TableFilter extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    {
      /* <div style={{ marginBottom: 16 }}>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div> */
    }
    return (
      <div>
        <Breadcrumb separator="/">
          <Breadcrumb.Item>
            <Link to="/" style={{ color: '#a0d911', fontWeight: 'bold' }}>
              Αρχική
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to="/locations"
              style={{ color: '#a0d911', fontWeight: 'bold' }}
            >
              Περιοχές
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to="/events/city"
              style={{
                color: '#7cb305',
                fontSize: '17px',
                fontWeight: 'bold',
              }}
            >
              Άγιος Νικόλαος
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          bordered
          size={'small'}
          pagination={false}
          hideSelectAll
        />
      </div>
    );
  }
}

export default TableFilter;
