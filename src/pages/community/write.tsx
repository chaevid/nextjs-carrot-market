import Button from 'components/button';
import Input from 'components/input';
import Layout from 'components/layout';
import Textarea from 'components/textarea';
import type { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <Layout
      canGoBack
      title="Post in My Local">
      <form className="space-y-2 px-4 py-4">
        <Input
          label={'Title'}
          name={'title'}
        />
        <Textarea
          label={'Question'}
          name={'question'}
          rows={6}
          placeholder={'What are you curious about?'}
        />
        <Button text={'Submit'} />
      </form>
    </Layout>
  );
};

export default Write;
