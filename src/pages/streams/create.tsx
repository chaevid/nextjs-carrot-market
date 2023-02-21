import Button from 'components/button';
import Input from 'components/input';
import Layout from 'components/layout';
import Textarea from 'components/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout
      title="Go Live"
      canGoBack>
      <div className="space-y-4 px-4 py-4">
        <Input
          label={'Title'}
          name={'title'}
        />
        <Input
          label={'Price'}
          name={'price'}
          category="price"
        />
        <Textarea
          label="Description"
          name="description"
          rows={6}
          placeholder={`Create Stream`}
        />
        <Button text="Go Live" />
      </div>
    </Layout>
  );
};

export default Create;
