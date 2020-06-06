import React from 'react';
import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;

const Bio = () => {
  return (
    <div>
      <Divider dashed />
      <Typography>
        <Paragraph>
          <p>
            {/* {profileData
                ? `${profileData.introduction}`
                : 'Δεν υπάρχει περιγραφή.'} */}
            <br />
            <div>
              {/* {profileData ? `@${profileData.name}` : '@ --'}{' '}
                {profileData ? `(${profileData.age})` : null} */}
            </div>
          </p>
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Bio;
