import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DefaultBtn from './DefaultBtn';

const stories = storiesOf('DefautlBtn', module);
stories.add('DefautlBtn', () => <div>
    <DefaultBtn buttonText={'Begin'} handleFunction={() => { alert('Success!') }}></DefaultBtn>
</div>);