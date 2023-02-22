import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Layout from '@/components/layout';
import LocalQuestionComment from '@/components/local-question-comment';
import LocalQuestionDetail from '@/components/local-question-detail';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
  const createdTime = new Date(2023, 1, 21, 17, 30, 25, 9); // new Date(year, monthIndex, day, hours, minutes, seconds)

  return (
    <Layout canGoBack>
      <div className="space-y-4 divide-y">
        <LocalQuestionDetail
          id={0}
          user={'CHAEVID'}
          location={'Jamsil'}
          question={`Question`}
          createdTime={createdTime}
          interested={5}
          comments={3}
          views={2}
        />
        <div className="space-y-4">
          <LocalQuestionComment
            id={0}
            user={'Nico'}
            location={'Songpa'}
            createdTime={createdTime}
            comment={
              'The best mandu restaurant is the one next to my house.'
            }></LocalQuestionComment>
          <div className="px-4">
            <Textarea
              hideLabel
              label={'question'}
              name={'question'}
              rows={4}
              placeholder="Answer this question!"></Textarea>
            <Button text={'Reply'} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
