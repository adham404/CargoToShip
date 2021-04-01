<template>
    <div>
    <v-data-table
    :headers="cargo ? Cargoheadings : Shipheadings"
    :items="cargo ? CargoData : ShipData"
    @click:row="LongListing"
    >
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <v-card>
        <LongList />
        <v-card-actions class="justify-end">
            <v-btn
            text
            @click="dialog=!dialog"
            >Close</v-btn>
            <v-btn
            text
            >Buy</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
    </div>

</template>

<script>
import LongList from "./LongList"
import {mapMutations} from "vuex"
export default {
props:["cargo"],
data()
{
    return{
        Cargoheadings:[
        {
            text:"Cargo Type",
            align: 'start',
            value:"CargoType"
        },
        {
            text:"Dangerous Goods",
            value:"DangerousGoods"
        },
        {
            text:"Quantity",
            value:"Quantity"
        },
        {
            text:"Loading port",
            value:"LoadingPort"
        },
        {
            text:"freight",
            value:"Freight"
        },
        ],
        Shipheadings:[
            {
                text:"Ready To Carry Dangerous Goods",
                value:"ReadyToCarryDangerousGoods"
            },
            {
                text:"Dead Weight",
                value:"DeadWeight"
            },
            {
                text:"From Date",
                value:"FromDate"
            },
            {
                text:"To Date",
                value:"ToDate"
            },
        ],
        TableHeadings:[],
        CargoData:[
            {
                CargoType:"Test",
                DangerousGoods:true,
                CargoDescription:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quos impedit odio accusamus enim quia, laboriosam, ipsum possimus nostrum quis quae itaque sit minus perspiciatis nulla magnam ullam repellendus. Molestias.",
                Quantity:500,
                LoadingPort:"Port X",
                DischargingPort:"Port Y",
                Freight:"X",
                FromDate:"2-3-2021",
                ToDate:"10-3-2021",
            },
            // {
            //     CargoType:"Test2",
            //     DangerousGoods:false,
            //     Quantity:600,
            //     LoadingPort:"Port z",
            //     Freight:"Z",
            //     FromDate:"4-16-2021",
            //     RandomField:"N"
            // },

        ],
        ShipData:[
            {
                ReadyToCarryDangerousGoods:true,
                ChartertingType:"X",
                TypeOfShip:"Z",
                HoldVolume:"Y",
                YearOfBuilt:"X-Y-Z",
                AvailableSector:"W",
                DeadWeight:400,
                FromDate:"5-6-2021",
                ToDate:"7-12-2022",
                RandomField:"Y",
                RandomField2:"Y",
            }
        ],
        dialog:false,
        SelectedObject:""
    }
},
components:{
    LongList
},
methods:{
    ...mapMutations(["SetObjectLongListing","SetCargoStatus"]),
    LongListing(value)
    {
        this.SetCargoStatus(this.cargo);
        this.SetObjectLongListing(value)
        this.dialog = true
    }
    // CheckHeader()
    // {
    //     }
},
// updated()
// {
//     if(this.cargo)
//     {
//         this.TableHeadings = this.Cargoheadings
//     }
//     else
//     {
//         this.TableHeadings = this.Shipheadings
//     }
// }
// computed:{
//     CheckHeader()
//     {
//     }
// }
}
</script>

<style>

</style>