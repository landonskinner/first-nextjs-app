import { useRouter } from 'next/router';

function DetailPage() {

    const router = useRouter();

    // object that holds value for dynamic params
    const newsId = router.query.newsId;

    return (
        <h1>The Detail Page</h1>
    )
}

export default DetailPage;