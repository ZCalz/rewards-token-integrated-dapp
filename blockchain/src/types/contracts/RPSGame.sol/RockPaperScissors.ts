/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RockPaperScissorsInterface extends utils.Interface {
  functions: {
    "claimWins()": FunctionFragment;
    "claimedWins(address)": FunctionFragment;
    "gamesPlayed()": FunctionFragment;
    "name()": FunctionFragment;
    "playWithAPlayer(uint8)": FunctionFragment;
    "playWithComputer(uint8)": FunctionFragment;
    "playerWins(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimWins"
      | "claimedWins"
      | "gamesPlayed"
      | "name"
      | "playWithAPlayer"
      | "playWithComputer"
      | "playerWins"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "claimWins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimedWins",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "gamesPlayed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playWithAPlayer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "playWithComputer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "playerWins",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claimWins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimedWins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gamesPlayed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playWithAPlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playWithComputer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "playerWins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "AnnounceResult(uint256,string)": EventFragment;
    "PlayerSelection(uint256,string,address,uint8,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnnounceResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerSelection"): EventFragment;
}

export interface AnnounceResultEventObject {
  gameNumber: BigNumber;
  result: string;
}
export type AnnounceResultEvent = TypedEvent<
  [BigNumber, string],
  AnnounceResultEventObject
>;

export type AnnounceResultEventFilter = TypedEventFilter<AnnounceResultEvent>;

export interface PlayerSelectionEventObject {
  gameNumber: BigNumber;
  player: string;
  playerAddress: string;
  playerSelection: number;
  playerSelectionReadable: string;
}
export type PlayerSelectionEvent = TypedEvent<
  [BigNumber, string, string, number, string],
  PlayerSelectionEventObject
>;

export type PlayerSelectionEventFilter = TypedEventFilter<PlayerSelectionEvent>;

export interface RockPaperScissors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RockPaperScissorsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimWins(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimedWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gamesPlayed(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    playWithAPlayer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    playWithComputer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    playerWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  claimWins(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimedWins(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  playWithAPlayer(
    selected: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  playWithComputer(
    selected: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  playerWins(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimWins(overrides?: CallOverrides): Promise<void>;

    claimedWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    playWithAPlayer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    playWithComputer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    playerWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AnnounceResult(uint256,string)"(
      gameNumber?: null,
      result?: null
    ): AnnounceResultEventFilter;
    AnnounceResult(gameNumber?: null, result?: null): AnnounceResultEventFilter;

    "PlayerSelection(uint256,string,address,uint8,string)"(
      gameNumber?: null,
      player?: null,
      playerAddress?: null,
      playerSelection?: null,
      playerSelectionReadable?: null
    ): PlayerSelectionEventFilter;
    PlayerSelection(
      gameNumber?: null,
      player?: null,
      playerAddress?: null,
      playerSelection?: null,
      playerSelectionReadable?: null
    ): PlayerSelectionEventFilter;
  };

  estimateGas: {
    claimWins(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimedWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gamesPlayed(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    playWithAPlayer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    playWithComputer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    playerWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimWins(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimedWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gamesPlayed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playWithAPlayer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    playWithComputer(
      selected: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    playerWins(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
