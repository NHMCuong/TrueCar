import type { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

interface IUser {
  id: string;
  totalStudent: number;
  supervising_Teacher: string;
  avatar_Teacher: string;
}

const MockDetail: NextPage<{ data: any }> = ({ data }) => {

  return (
    <div>
      <ul>
        {data?.totalStudent}
        {data?.supervising_Teacher}
        {data?.avatar_Teacher}
      </ul>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({
//   res
// }) => {
//   try {
//     // const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);
//     const result = await fetch(`http://localhost:3300/api/class/Mission`);
    
//     const data = await result.json();
//     return {
//       props: { data }
//     };
//   } catch (error) {
//     res.statusCode = 404;
//     return {
//       props: {}
//     };
//   }
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);

  const data = await result.json();
  const params: any = [];
  data.data.forEach((el: IUser) =>
    params.push({ params: { mockId: el.id } })
  );
  return {
    paths: params,
    fallback: true // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const result = await fetch(`http://localhost:3300/api/class/${params?.mockId || ''}`);
  const data = await result.json();
  return {
    props: {
      data
    }
  }
}

export default MockDetail;
