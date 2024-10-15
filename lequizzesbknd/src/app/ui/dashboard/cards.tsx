import { CardProps } from "@/app/lib/definitions";
import TestCard from "../../../components/test-card/test-card.component";


export default function Card = () => {


	return (
		<TestCard  />
	);
}



// export default async function CardWrapper() {
// 	return (
// 		<>
// 			{/* NOTE: Uncomment this code in Chapter 9 */}

// 			{/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
//       <Card title="Pending" value={totalPendingInvoices} type="pending" />
//       <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
//       <Card
//         title="Total Customers"
//         value={numberOfCustomers}
//         type="customers"
//       /> */}
// 		</>
// 	);
// }