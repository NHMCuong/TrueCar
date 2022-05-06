import type { NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

interface IUser {
  id: string;
  totalStudent: number;
  supervising_Teacher: string;
  avatar_Teacher: string;
}

const MockApi: NextPage<{ data: any }> = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <ul>
        {data.data && data.data.map((e: any,idx: any) => {
          return <li key={idx}>
            {e.supervising_Teacher} <button onClick={() => router.push(`/mock/${e.id}`)}>View Detail</button>
          </li>
        })}
      </ul>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);

//   const data = await result.json();
//   const params: any = [];
//   data.data.forEach((el: IUser) =>
//     params.push({ params: { mockId: el.id } })
//   );
//   return {
//     paths: params,
//     fallback: false // false or 'blocking'
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//     const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);
    
//     const data = await result.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  try {
    // const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);
    const result = await fetch(`http://localhost:3300/api/class?_page=1&_limit=20`);
    
    const data = await result.json();
    return {
      props: { data }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};

export default MockApi;
