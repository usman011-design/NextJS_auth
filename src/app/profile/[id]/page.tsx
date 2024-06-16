export default function ProfilePage({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>Profile Page</h1>
            <hr />
            <p className="text-4xl">Profile data</p>
            <span className=" p-2 rounded bg-orange-500 text-black">{params.id}</span>
        </div>
    )
}