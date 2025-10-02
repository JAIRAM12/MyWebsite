import { ClockIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

const Upcoming = ({ name, expectedDate }) => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl shadow-sm text-center">
            {/* Icon */}
            <div className="flex justify-center mb-3">
                <ClockIcon className="h-10 w-10 text-blue-500" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                {name || "Upcoming Announcement"}
            </h2>

            {/* Message */}
            <p className="text-gray-600 mt-2">
                We’re preparing something exciting!
                Details will be announced in the coming days.
            </p>

            {/* Expected Date */}
            {expectedDate ? (
                <p className="mt-3 text-sm text-gray-500">
                    Expected around: <span className="font-medium">{expectedDate}</span>
                </p>
            ) : (
                <p className="mt-3 text-sm text-gray-400 italic">
                    Coming in the next few days...
                </p>
            )}
        </div>
    );
};

export default memo(Upcoming);
