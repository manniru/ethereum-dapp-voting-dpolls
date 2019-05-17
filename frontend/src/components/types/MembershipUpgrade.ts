import { AddressType, BlockHeightType } from "../../actions/types/eth";
import { Membership } from "../../types";

export namespace IMembershipUpgrade {
    export interface IInnerProps {
        web3: any;
    }

    export interface IStateFromProps {
        accountAddress: AddressType | null;
        blockHeight: BlockHeightType;
        membership: Membership | null;
    }

    export interface IPropsFromDispatch {
        setMembership: (nextMembership: Membership) => void;
    }
}

export type IMembershipUpgradeProps = IMembershipUpgrade.IInnerProps & IMembershipUpgrade.IStateFromProps & IMembershipUpgrade.IPropsFromDispatch;

export interface IMembershipUpgradeStates {
    waitingMessage: {
        show: boolean,
        message: string | null,
    };
    errorMessage: {
        show: boolean,
        message: string | null,
    };
    successfulMessage: {
        show: boolean,
    };
}
