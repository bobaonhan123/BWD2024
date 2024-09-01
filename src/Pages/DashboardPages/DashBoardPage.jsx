import FindNewWord from "../../components/FindNewWord";
import Review from "../../components/Review";
import MemorizeChart from "../../components/MemorizeChart";

export default function DashBoardPage() {
    return (
        <div className="w-3/5 mx-auto pt-8">
            <div className="w-full rounded-2xl
                            min-h-screen">
                <div className="flex flex-col space-y-6">
                    <FindNewWord />
                    <div className="flex flex-row space-x-6 min-w-max ">
                        <Review />
                        <MemorizeChart />
                    </div>
                </div>
            </div>

        </div>
    )
}
