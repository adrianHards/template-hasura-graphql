import { GraphQLClient } from "graphql-request";
import { useEmailsQuery } from "../../gql/graphql";

const client = new GraphQLClient("http://localhost:8080/v1/graphql", {
  headers: {
    "x-hasura-admin-secret": "myadminsecret",
  },
});

const Emails = () => {
  const { data } = useEmailsQuery(client);

  return (
    <div>
      {data &&
        data.email?.map((email) => (
          <div key={email?.id}>
            <p>ID: {email?.id}</p>
            <p>Subject: {email?.subject}</p>
            <p>To: {email?.to}</p>
            <p>From: {email?.from}</p>
            <p>Date: {email?.date}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Emails;
