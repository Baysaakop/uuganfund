import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import CustomCarousel from '@/components/Home/CustomCarousel'
import { Typography, List, Card } from 'antd';

const { Title, Text } = Typography;

const data = [
  {
    title: 'Picture 1',
  },
  {
    title: 'Picture 2',
  },
  {
    title: 'Picture 3',
  },
  {
    title: 'Picture 4',
  },
  {
    title: 'Picture 5',
  },
  {
    title: 'Picture 6',
  },
];

export default function Home() {
  return (
    <>
      <div style={{ padding: '0 16%', marginBottom: '40px' }}>
        <CustomCarousel />
      </div>
      <div style={{ padding: '0 16%', marginBottom: '40px' }}>
        <Title>About</Title>
        <div style={{ background: '#f5f5f5', borderRadius: '4px', padding: '16px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ marginRight: '40px' }}>
            <img src='https://michaelphelpsfoundation.org/wp-content/uploads/2021/05/BooneStudios-142-scaled.jpg' style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus suscipit sem, vel rutrum orci rutrum vel. Duis eget ornare velit. Nullam sem lectus, hendrerit at porttitor ac, lobortis id tortor. Aenean maximus eu turpis nec pretium. In sed felis cursus, auctor lectus et, rutrum dolor. Nulla malesuada, eros vitae mollis congue, lacus libero mattis ligula, et tristique nisi felis vel nisl. Nulla tellus enim, feugiat eget nulla vel, feugiat porta libero.</Text>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 16%', marginBottom: '40px' }}>
        <Title>Gallery</Title>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>picture</Card>
            </List.Item>
          )}
        />
      </div>
      <div style={{ padding: '0 16%', marginBottom: '40px' }}>
        <Title>Contacts</Title>   
        Contacts information     
      </div>
    </>
  )
}
