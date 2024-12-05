import clsx from "clsx"

export function Label({position, title, price}: any): any {

    return <div className={clsx(`absolute left-20 ${position == 'center' ? 'left-10' : 'left-5 bottom-5'}`)}>
        <div className="p-1 border text-xs border-neutral-200 rounded-3xl flex items-center font-medium">
            <div className="title p-1.5">{title}</div>
            <div className="price p-1.5 px-3 text-white border-red-100 bg-blue-600 h-full rounded-3xl">{price}</div>
        </div>
    </div>
}